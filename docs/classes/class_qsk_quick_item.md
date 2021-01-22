---
title: QskQuickItem
layout: docs

---


**Module:** **[Framework](/docs/modules/group___framework/)**



Inherits from QQuickItem

Inherited by [QskControl](/docs/classes/class_qsk_control/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Flag](/docs/classes/class_qsk_quick_item/#enum-flag)** { DeferredUpdate =  1 << 0, DeferredPolish =  1 << 1, DeferredLayout =  1 << 2, CleanupOnVisibility =  1 << 3, PreferRasterForTextures =  1 << 4, DebugForceBackground =  1 << 7, LastFlag = DebugForceBackground} |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setGeometry](/docs/classes/class_qsk_quick_item/#slot-setgeometry)**(const QRectF & rect) |
| void | **[show](/docs/classes/class_qsk_quick_item/#slot-show)**() |
| void | **[hide](/docs/classes/class_qsk_quick_item/#slot-hide)**() |
| void | **[setVisible](/docs/classes/class_qsk_quick_item/#slot-setvisible)**(bool on) |
| void | **[resetImplicitSize](/docs/classes/class_qsk_quick_item/#slot-resetimplicitsize)**() |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[itemFlagsChanged](/docs/classes/class_qsk_quick_item/#signal-itemflagschanged)**() |
| void | **[controlFlagsChanged](/docs/classes/class_qsk_quick_item/#signal-controlflagschanged)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[~QskQuickItem](/docs/classes/class_qsk_quick_item/#function-~qskquickitem)**() override |
| const char * | **[className](/docs/classes/class_qsk_quick_item/#function-classname)**() const |
| bool | **[isVisibleTo](/docs/classes/class_qsk_quick_item/#function-isvisibleto)**(const QQuickItem * ancestor) const |
| bool | **[isVisibleToParent](/docs/classes/class_qsk_quick_item/#function-isvisibletoparent)**() const |
| bool | **[hasChildItems](/docs/classes/class_qsk_quick_item/#function-haschilditems)**() const |
| QRectF | **[geometry](/docs/classes/class_qsk_quick_item/#function-geometry)**() const |
| QRectF | **[rect](/docs/classes/class_qsk_quick_item/#function-rect)**() const |
| QSizeF | **[implicitSize](/docs/classes/class_qsk_quick_item/#function-implicitsize)**() const |
| void | **[setGeometry](/docs/classes/class_qsk_quick_item/#function-setgeometry)**(qreal x, qreal y, qreal width, qreal height) |
| void | **[setPolishOnResize](/docs/classes/class_qsk_quick_item/#function-setpolishonresize)**(bool on) |
| bool | **[polishOnResize](/docs/classes/class_qsk_quick_item/#function-polishonresize)**() const |
| void | **[setTransparentForPositioner](/docs/classes/class_qsk_quick_item/#function-settransparentforpositioner)**(bool on) |
| bool | **[isTransparentForPositioner](/docs/classes/class_qsk_quick_item/#function-istransparentforpositioner)**() const |
| void | **[setTabFence](/docs/classes/class_qsk_quick_item/#function-settabfence)**(bool on) |
| bool | **[isTabFence](/docs/classes/class_qsk_quick_item/#function-istabfence)**() const |
| void | **[setLayoutMirroring](/docs/classes/class_qsk_quick_item/#function-setlayoutmirroring)**(bool on, bool recursive =false) |
| void | **[resetLayoutMirroring](/docs/classes/class_qsk_quick_item/#function-resetlayoutmirroring)**() |
| bool | **[layoutMirroring](/docs/classes/class_qsk_quick_item/#function-layoutmirroring)**() const |
| void | **[setControlFlags](/docs/classes/class_qsk_quick_item/#function-setcontrolflags)**(Flags flags) |
| void | **[resetControlFlags](/docs/classes/class_qsk_quick_item/#function-resetcontrolflags)**() |
| Flags | **[controlFlags](/docs/classes/class_qsk_quick_item/#function-controlflags)**() const |
| Q_INVOKABLE void | **[setControlFlag](/docs/classes/class_qsk_quick_item/#function-setcontrolflag)**([Flag](/docs/classes/class_qsk_quick_item/#enum-flag) flag, bool on =true) |
| Q_INVOKABLE void | **[resetControlFlag](/docs/classes/class_qsk_quick_item/#function-resetcontrolflag)**([Flag](/docs/classes/class_qsk_quick_item/#enum-flag) flag) |
| Q_INVOKABLE bool | **[testControlFlag](/docs/classes/class_qsk_quick_item/#function-testcontrolflag)**([Flag](/docs/classes/class_qsk_quick_item/#enum-flag) flag) const |
| void | **[classBegin](/docs/classes/class_qsk_quick_item/#function-classbegin)**() override |
| void | **[componentComplete](/docs/classes/class_qsk_quick_item/#function-componentcomplete)**() override |
| void | **[releaseResources](/docs/classes/class_qsk_quick_item/#function-releaseresources)**() override |
| bool | **[isPolishScheduled](/docs/classes/class_qsk_quick_item/#function-ispolishscheduled)**() const |
| bool | **[isUpdateNodeScheduled](/docs/classes/class_qsk_quick_item/#function-isupdatenodescheduled)**() const |
| bool | **[isInitiallyPainted](/docs/classes/class_qsk_quick_item/#function-isinitiallypainted)**() const |
| bool | **[maybeUnresized](/docs/classes/class_qsk_quick_item/#function-maybeunresized)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskQuickItem](/docs/classes/class_qsk_quick_item/#function-qskquickitem)**(QskQuickItemPrivate & dd, QQuickItem * parent =nullptr) |
| bool | **[event](/docs/classes/class_qsk_quick_item/#function-event)**(QEvent * event) override |
| virtual void | **[changeEvent](/docs/classes/class_qsk_quick_item/#function-changeevent)**(QEvent * ) |
| virtual void | **[geometryChangeEvent](/docs/classes/class_qsk_quick_item/#function-geometrychangeevent)**(QskGeometryChangeEvent * ) |
| virtual void | **[windowChangeEvent](/docs/classes/class_qsk_quick_item/#function-windowchangeevent)**(QskWindowChangeEvent * ) |
| void | **[itemChange](/docs/classes/class_qsk_quick_item/#function-itemchange)**(ItemChange , const ItemChangeData & ) override |
| void | **[geometryChange](/docs/classes/class_qsk_quick_item/#function-geometrychange)**(const QRectF & newGeometry, const QRectF & oldGeometry) override |
| virtual void | **[aboutToShow](/docs/classes/class_qsk_quick_item/#function-abouttoshow)**() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QRectF | **[geometry](/docs/classes/class_qsk_quick_item/#property-geometry)**  |
| bool | **[transparentForPositioners](/docs/classes/class_qsk_quick_item/#property-transparentforpositioners)**  |
| bool | **[tabFence](/docs/classes/class_qsk_quick_item/#property-tabfence)**  |
| bool | **[polishOnResize](/docs/classes/class_qsk_quick_item/#property-polishonresize)**  |

## Public Types Documentation

### enum Flag

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| DeferredUpdate |  1 << 0|   |
| DeferredPolish |  1 << 1|   |
| DeferredLayout |  1 << 2|   |
| CleanupOnVisibility |  1 << 3|   |
| PreferRasterForTextures |  1 << 4|   |
| DebugForceBackground |  1 << 7|   |
| LastFlag | DebugForceBackground|   |




Qt/Quick classes have a tendency to update items too early and too often. To avoid processing of unwanted operations [QskQuickItem](/docs/classes/class_qsk_quick_item/) implements a couple of modifications, that can be en/disabled individually.

The default setting enables all attributes. 


## Public Slots Documentation

### slot setGeometry

```cpp
inline void setGeometry(
    const QRectF & rect
)
```


### slot show

```cpp
void show()
```


### slot hide

```cpp
void hide()
```


### slot setVisible

```cpp
void setVisible(
    bool on
)
```


### slot resetImplicitSize

```cpp
void resetImplicitSize()
```


## Public Signals Documentation

### signal itemFlagsChanged

```cpp
void itemFlagsChanged()
```


### signal controlFlagsChanged

```cpp
void controlFlagsChanged()
```


## Public Functions Documentation

### function ~QskQuickItem

```cpp
~QskQuickItem() override
```


### function className

```cpp
const char * className() const
```


### function isVisibleTo

```cpp
bool isVisibleTo(
    const QQuickItem * ancestor
) const
```


### function isVisibleToParent

```cpp
bool isVisibleToParent() const
```


### function hasChildItems

```cpp
inline bool hasChildItems() const
```


### function geometry

```cpp
QRectF geometry() const
```


### function rect

```cpp
QRectF rect() const
```


### function implicitSize

```cpp
inline QSizeF implicitSize() const
```


### function setGeometry

```cpp
void setGeometry(
    qreal x,
    qreal y,
    qreal width,
    qreal height
)
```


### function setPolishOnResize

```cpp
void setPolishOnResize(
    bool on
)
```


### function polishOnResize

```cpp
bool polishOnResize() const
```


### function setTransparentForPositioner

```cpp
void setTransparentForPositioner(
    bool on
)
```


### function isTransparentForPositioner

```cpp
bool isTransparentForPositioner() const
```


### function setTabFence

```cpp
void setTabFence(
    bool on
)
```


### function isTabFence

```cpp
bool isTabFence() const
```


### function setLayoutMirroring

```cpp
void setLayoutMirroring(
    bool on,
    bool recursive =false
)
```


### function resetLayoutMirroring

```cpp
void resetLayoutMirroring()
```


### function layoutMirroring

```cpp
bool layoutMirroring() const
```


### function setControlFlags

```cpp
void setControlFlags(
    Flags flags
)
```


### function resetControlFlags

```cpp
void resetControlFlags()
```


### function controlFlags

```cpp
Flags controlFlags() const
```


### function setControlFlag

```cpp
Q_INVOKABLE void setControlFlag(
    Flag flag,
    bool on =true
)
```


### function resetControlFlag

```cpp
Q_INVOKABLE void resetControlFlag(
    Flag flag
)
```


### function testControlFlag

```cpp
Q_INVOKABLE bool testControlFlag(
    Flag flag
) const
```


### function classBegin

```cpp
void classBegin() override
```


### function componentComplete

```cpp
void componentComplete() override
```


### function releaseResources

```cpp
void releaseResources() override
```


### function isPolishScheduled

```cpp
bool isPolishScheduled() const
```


### function isUpdateNodeScheduled

```cpp
bool isUpdateNodeScheduled() const
```


### function isInitiallyPainted

```cpp
bool isInitiallyPainted() const
```


### function maybeUnresized

```cpp
bool maybeUnresized() const
```


## Protected Functions Documentation

### function QskQuickItem

```cpp
QskQuickItem(
    QskQuickItemPrivate & dd,
    QQuickItem * parent =nullptr
)
```


### function event

```cpp
bool event(
    QEvent * event
) override
```


### function changeEvent

```cpp
virtual void changeEvent(
    QEvent * 
)
```


### function geometryChangeEvent

```cpp
virtual void geometryChangeEvent(
    QskGeometryChangeEvent * 
)
```


**Reimplemented by**: [QskLinearBox::geometryChangeEvent](/docs/classes/class_qsk_linear_box/#function-geometrychangeevent)


### function windowChangeEvent

```cpp
virtual void windowChangeEvent(
    QskWindowChangeEvent * 
)
```


### function itemChange

```cpp
void itemChange(
    ItemChange ,
    const ItemChangeData & 
) override
```


### function geometryChange

```cpp
void geometryChange(
    const QRectF & newGeometry,
    const QRectF & oldGeometry
) override
```


### function aboutToShow

```cpp
virtual void aboutToShow()
```


## Public Property Documentation

### property geometry

```cpp
QRectF geometry;
```


### property transparentForPositioners

```cpp
bool transparentForPositioners;
```


### property tabFence

```cpp
bool tabFence;
```


### property polishOnResize

```cpp
bool polishOnResize;
```


-------------------------------

Updated on 22 January 2021 at 17:05:50 CET