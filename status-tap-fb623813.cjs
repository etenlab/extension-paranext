"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("./crowd-bible-extension.web-view-7654aaa3.cjs");require("react");require("papi");/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const a=()=>{const n=window;n.addEventListener("statusTap",()=>{t.readTask(()=>{const r=n.innerWidth,s=n.innerHeight,o=document.elementFromPoint(r/2,s/2);if(!o)return;const e=t.findClosestIonContent(o);e&&new Promise(i=>t.componentOnReady(e,i)).then(()=>{t.writeTask(async()=>{e.style.setProperty("--overflow","hidden"),await t.scrollToTop(e,300),e.style.removeProperty("--overflow")})})})})};exports.startStatusTap=a;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLXRhcC1mYjYyMzgxMy5janMiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jb21wb25lbnRzL3N0YXR1cy10YXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHJlYWRUYXNrLCB3cml0ZVRhc2sgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudCc7XG5pbXBvcnQgeyBhIGFzIGZpbmRDbG9zZXN0SW9uQ29udGVudCwgcyBhcyBzY3JvbGxUb1RvcCB9IGZyb20gJy4vaW5kZXg4LmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50T25SZWFkeSB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmNvbnN0IHN0YXJ0U3RhdHVzVGFwID0gKCkgPT4ge1xuICBjb25zdCB3aW4gPSB3aW5kb3c7XG4gIHdpbi5hZGRFdmVudExpc3RlbmVyKCdzdGF0dXNUYXAnLCAoKSA9PiB7XG4gICAgcmVhZFRhc2soKCkgPT4ge1xuICAgICAgY29uc3Qgd2lkdGggPSB3aW4uaW5uZXJXaWR0aDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHdpbi5pbm5lckhlaWdodDtcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh3aWR0aCAvIDIsIGhlaWdodCAvIDIpO1xuICAgICAgaWYgKCFlbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb250ZW50RWwgPSBmaW5kQ2xvc2VzdElvbkNvbnRlbnQoZWwpO1xuICAgICAgaWYgKGNvbnRlbnRFbCkge1xuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gY29tcG9uZW50T25SZWFkeShjb250ZW50RWwsIHJlc29sdmUpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB3cml0ZVRhc2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiBzY3JvbGxpbmcgYW5kIHVzZXIgdGFwcyBzdGF0dXMgYmFyLFxuICAgICAgICAgICAgICogb25seSBjYWxsaW5nIHNjcm9sbFRvVG9wIGlzIG5vdCBlbm91Z2hcbiAgICAgICAgICAgICAqIGFzIGVuZ2luZXMgbGlrZSBXZWJLaXQgd2lsbCBqdW1wIHRoZVxuICAgICAgICAgICAgICogc2Nyb2xsIHBvc2l0aW9uIGJhY2sgZG93biBhbmQgY29tcGxldGVcbiAgICAgICAgICAgICAqIGFueSBpbi1wcm9ncmVzcyBtb21lbnR1bSBzY3JvbGxpbmcuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnRlbnRFbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1vdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgICAgIGF3YWl0IHNjcm9sbFRvVG9wKGNvbnRlbnRFbCwgMzAwKTtcbiAgICAgICAgICAgIGNvbnRlbnRFbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnLS1vdmVyZmxvdycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBzdGFydFN0YXR1c1RhcCB9O1xuIl0sIm5hbWVzIjpbInN0YXJ0U3RhdHVzVGFwIiwid2luIiwicmVhZFRhc2siLCJ3aWR0aCIsImhlaWdodCIsImVsIiwiY29udGVudEVsIiwiZmluZENsb3Nlc3RJb25Db250ZW50IiwicmVzb2x2ZSIsImNvbXBvbmVudE9uUmVhZHkiLCJ3cml0ZVRhc2siLCJzY3JvbGxUb1RvcCJdLCJtYXBwaW5ncyI6ImtMQUFBO0FBQUE7QUFBQSxHQU9LLE1BQUNBLEVBQWlCLElBQU0sQ0FDM0IsTUFBTUMsRUFBTSxPQUNaQSxFQUFJLGlCQUFpQixZQUFhLElBQU0sQ0FDdENDLEVBQUFBLFNBQVMsSUFBTSxDQUNiLE1BQU1DLEVBQVFGLEVBQUksV0FDWkcsRUFBU0gsRUFBSSxZQUNiSSxFQUFLLFNBQVMsaUJBQWlCRixFQUFRLEVBQUdDLEVBQVMsQ0FBQyxFQUMxRCxHQUFJLENBQUNDLEVBQ0gsT0FFRixNQUFNQyxFQUFZQyx3QkFBc0JGLENBQUUsRUFDdENDLEdBQ0YsSUFBSSxRQUFTRSxHQUFZQyxFQUFnQixpQkFBQ0gsRUFBV0UsQ0FBTyxDQUFDLEVBQUUsS0FBSyxJQUFNLENBQ3hFRSxFQUFBQSxVQUFVLFNBQVksQ0FRcEJKLEVBQVUsTUFBTSxZQUFZLGFBQWMsUUFBUSxFQUNsRCxNQUFNSyxFQUFXLFlBQUNMLEVBQVcsR0FBRyxFQUNoQ0EsRUFBVSxNQUFNLGVBQWUsWUFBWSxDQUN2RCxDQUFXLENBQ1gsQ0FBUyxDQUVULENBQUssQ0FDTCxDQUFHLENBQ0giLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19