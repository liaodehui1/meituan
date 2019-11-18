<template>
  <div class="map-container">
    <div class="mini-map" ref="miniMap"></div>
    <div class="big-map" v-show="show">
      <div class="map-box">
        <div class="map-type">
          <div class="map-close" @click="closeBigMap">
            <i class="iconfont icon-close_icon"></i>
          </div>
        </div>
        <div class="map-content" 
          ref="bigMap"
          :style="`height: ${this.height}px; width: ${this.width}px; position: relative; 
            background-color: rgb(229, 227, 223); overflow: hidden; 
            transform: translateZ(0px);`"></div>
      </div>
    </div>
  </div>
</template>

<script>
function CustomOverlay(position, index) {
    this.position = position;
}
export default {
  data() {
    return {
      miniMapZoom:15,
      bigMapZoom:15,
      iconImg:require('@/assets/images/location_red.png'),
      show:false,
      height:1090,
      width:1030,
      bigMapDidCreated:false,
      myLatlng:null
    }
  },
  props:['lng','lat','name','address','phone'],
  mounted() {
    window.createMaps = this.createMaps
    this.loadScript()
    this.resize()
    window.addEventListener('resize',this.resize)
  },
  beforeDestroy() {
    window.removeEventListener('resize',this.resize)
  },
  methods: {
    loadScript() {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://map.qq.com/api/js?v=2.exp&key=5PPBZ-3XBY6-KHUSH-ERCFF-352LZ-BRF24&libraries=convertor&callback=createMaps";
      document.body.appendChild(script);
    },
    resize() {
      var height = window.innerHeight - 245;
      var width = document.body.clientWidth - 250;

      if (height < 500) {
        height = 500;
      }

      if (height > 1090) {
        height = 1090;
      }

      if (width > 1030) {
        width = 1030;
      }

      if (width < 790) {
        width = 790;
      }

      this.height = height
      this.width = width
    },
    createMaps() {
      // console.log('请求完成')
      this.myLatlng = new qq.maps.LatLng(this.lat,this.lng)
      this.CustomOverlay = this.initCustomOverlay()
      this.createMiniMap()
    },
    createMiniMap() {
      let miniMapRef = this.$refs.miniMap
      let miniMap = new qq.maps.Map(miniMapRef,{
        center:this.myLatlng,
        zoom:this.miniMapZoom,
        panControl: false,
        mapTypeControl: false,
        zoomControl: false
      })
      this.createOverlays(miniMap)
      this.addZoomCtrl(miniMap)
    },
    createBigMap() {
      let bigMapRef = this.$refs.bigMap
      return new qq.maps.Map(bigMapRef, {
        center: this.myLatlng,
        zoom: this.bigMapZoom
      });
    },
    addZoomCtrl(map) {
      var customZoomDiv = document.createElement('div');
        customZoomDiv.className = 'map-zoomin';
        var iconZoom = document.createElement('i');
        iconZoom.classList.add('iconfont');
        iconZoom.classList.add('icon-zoom_icon');
        customZoomDiv.appendChild(iconZoom);
        customZoomDiv.index = 1; // 设置在当前布局中的位置

        map.controls[qq.maps.ControlPosition.BOTTOM_RIGHT].push(customZoomDiv);
        qq.maps.event.addDomListener(customZoomDiv, 'click', () => {
          this.openBigMap();
      });
    },
    openBigMap() {
      this.show = true
      if(!this.bigMapDidCreated) {
        // console.log('创建bigmap')
        this.bigMapDidCreated = true
        this.$nextTick(() => {
          let bigMap = this.createBigMap()
          // console.log(bigMap)
          this.createOverlays(bigMap)
          let infoWin = this.infoWin = this.createInfoWin(bigMap)
          infoWin.open()
          //tips  自定义内容
          let content = this.getInfoContent()
          infoWin.setContent(content)
          infoWin.setPosition(this.myLatlng)
        })
      }else {
        this.infoWin.open()
      }
    },
    createInfoWin(map) {
      return new qq.maps.InfoWindow({
        map: map,
        zIndex: 1,
        visible: false
      });
    },
    getInfoContent() {
      return `<div class="info-win">\n            
        <p class="poi-name">${this.name || '-'}</p>\n            
        <p class="poi-address ellipsis">${this.address || '-'}</p>\n            
        <p class="poi-phone ellipsis">${this.phone || '-'}</p>\n            
        <p><a href="//map.qq.com/?type=nav&tocoord=${this.lng + ',' + this.lat}&c=${this.lng + ',' + this.lat}&l=13" 
          target="_blank" gaevent="map/view/queryroute">\u516C\u4EA4/\u9A7E\u8F66\u8DEF\u7EBF\u67E5\u8BE2\xBB</a></p>\n        
        </div>`
    },
    closeBigMap() {
      this.show = false
    },
    initCustomOverlay() {
      var self = this;
      CustomOverlay.prototype = new qq.maps.Overlay()
      CustomOverlay.prototype.construct = function() {
        var map_overlay = this.overlay = document.createElement("div")
        map_overlay.className = 'map-overlay'
        var map_poi_outer = this.div = document.createElement("div")
        map_poi_outer.classList.add('map-poi-outer')
        map_poi_outer.classList.add('init')
        var map_pin = document.createElement("div")
        map_pin.className = 'map-pin'
        var map_num = document.createElement("div")
        map_num.className = 'map-num'
        var span = document.createElement('span')
        map_num.appendChild(span)
        map_poi_outer.appendChild(map_pin)
        map_poi_outer.appendChild(map_num)
        this.overlay.appendChild(map_poi_outer)

        //将dom添加到覆盖物层
        var panes = this.getPanes();
        //设置panes的层级，overlayMouseTarget可接收点击事件
        panes.overlayMouseTarget.appendChild(map_overlay);
    
        this.div.onclick = function() {
            self.openBigMap()
        }
      }
      //实现draw接口来绘制和更新自定义的dom元素
      CustomOverlay.prototype.draw = function() {
          var overlayProjection = this.getProjection();
          //返回覆盖物容器的相对像素坐标
          var pixel = overlayProjection.fromLatLngToDivPixel(this.position);
          var divStyle = this.div.style;
          divStyle.zIndex = 100
          divStyle.left = pixel.x - 10 + "px";
          divStyle.top = pixel.y - 25 + "px";
      }
      //实现destroy接口来删除自定义的Dom元素，此方法会在setMap(null)后被调用
      CustomOverlay.prototype.destroy = function() {
          this.div.onclick = null;
          this.div.parentNode.removeChild(this.overlay);
          this.div = null
      }
      return CustomOverlay
    },
    createOverlays(map) {
      var Overlay = this.CustomOverlay
      var overlay = new Overlay(this.myLatlng);
      overlay.setMap(map);
    }
  },
}
</script>

<style lang="stylus">
  .mini-map
    width 230px
    height 220px
    border-radius 4px
    margin-bottom 10px
    border 1px solid #e5e5e5
  .map-zoomin
    height 35px
    width 45px
    background-color #000
    opacity 0.6
    border-radius 40px
    transition opacity 0.5s
    margin-right 10px
    margin-bottom 10px
    .iconfont
      color #ffffff
      font-size 24px
      line-height 35px
      text-align center
      padding 0 11px
  .big-map
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 999
    background rgba(8,8,8,0.8)
    animation fadeInAni 0.2s ease 
    .map-box
      background-color #222
      border-radius 4px
      position absolute
      top 100px
      left 50%
      padding 5px
      transform translateX(-50%)
      .map-type
        height 40px
        .map-close
          width 30px
          height 40px
          color #ababab
          transition color 0.5s
          float right
          &:hover
            color #ffffff
            transition color 0.5s
          .iconfont
            font-size 20px
            line-height 40px
      .map-content
        width 758px
        height 500px
        margin 0 auto
  .info-win
    padding 5px
    .poi-name
      font-size 14px
      font-weight 900
    .poi-address,.poi-phone
      font-size 12px
      color #999999
    a
      color #FE8C00
      font-size 12px
  .map-overlay
    .map-poi-outer
      position absolute
      height 27px
      cursor pointer
    .map-pin
      position absolute
      width 20px
      height 28px
      z-index 2
      background-image url(../../assets/images/location_red.png)
      background-size contain
      background-repeat no-repeat
    .map-num
      position absolute
      width 20px
      height 2px
      color #ffffff
      font-size 12px
      text-align center
      line-height 20px
      top 0
      left 0
      z-index 3
</style>