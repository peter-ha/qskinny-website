---
title: QskQuickItem
layout: docs

---


**Module:** **[Framework](/docs/modules/group__Framework/)**



 [More...](#detailed-description)


`#include <QskQuickItem.h>`

Inherits from QQuickItem

Inherited by [QskControl](/docs/classes/classQskControl/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Flag](/docs/classes/classQskQuickItem/#enum-flag)** { DeferredUpdate =  1 << 0, DeferredPolish =  1 << 1, DeferredLayout =  1 << 2, CleanupOnVisibility =  1 << 3, PreferRasterForTextures =  1 << 4, DebugForceBackground =  1 << 7} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[~QskQuickItem](/docs/classes/classQskQuickItem/#function-~qskquickitem)**() override |
| const char * | **[className](/docs/classes/classQskQuickItem/#function-classname)**() const |
| bool | **[isVisibleTo](/docs/classes/classQskQuickItem/#function-isvisibleto)**(const QQuickItem * ancestor) const |
| bool | **[isVisibleToParent](/docs/classes/classQskQuickItem/#function-isvisibletoparent)**() const |
| bool | **[hasChildItems](/docs/classes/classQskQuickItem/#function-haschilditems)**() const |
| QRectF | **[rect](/docs/classes/classQskQuickItem/#function-rect)**() const |
| QSizeF | **[implicitSize](/docs/classes/classQskQuickItem/#function-implicitsize)**() const |
| void | **[setGeometry](/docs/classes/classQskQuickItem/#function-setgeometry)**(qreal x, qreal y, qreal width, qreal height) |
| QRectF | **[geometry](/docs/classes/classQskQuickItem/#function-geometry)**() const |
| void | **[setPolishOnResize](/docs/classes/classQskQuickItem/#function-setpolishonresize)**(bool on) |
| bool | **[polishOnResize](/docs/classes/classQskQuickItem/#function-polishonresize)**() const |
| void | **[setTransparentForPositioner](/docs/classes/classQskQuickItem/#function-settransparentforpositioner)**(bool on) |
| bool | **[isTransparentForPositioner](/docs/classes/classQskQuickItem/#function-istransparentforpositioner)**() const |
| void | **[setTabFence](/docs/classes/classQskQuickItem/#function-settabfence)**(bool on) |
| bool | **[isTabFence](/docs/classes/classQskQuickItem/#function-istabfence)**() const |
| void | **[setLayoutMirroring](/docs/classes/classQskQuickItem/#function-setlayoutmirroring)**(bool on, bool recursive =false) |
| void | **[resetLayoutMirroring](/docs/classes/classQskQuickItem/#function-resetlayoutmirroring)**() |
| bool | **[layoutMirroring](/docs/classes/classQskQuickItem/#function-layoutmirroring)**() const |
| void | **[setControlFlags](/docs/classes/classQskQuickItem/#function-setcontrolflags)**(Flags flags) |
| void | **[resetControlFlags](/docs/classes/classQskQuickItem/#function-resetcontrolflags)**() |
| Flags | **[controlFlags](/docs/classes/classQskQuickItem/#function-controlflags)**() const |
| Q_INVOKABLE void | **[setControlFlag](/docs/classes/classQskQuickItem/#function-setcontrolflag)**([Flag](/docs/classes/classQskQuickItem/#enum-flag) flag, bool on =true) |
| Q_INVOKABLE void | **[resetControlFlag](/docs/classes/classQskQuickItem/#function-resetcontrolflag)**([Flag](/docs/classes/classQskQuickItem/#enum-flag) flag) |
| Q_INVOKABLE bool | **[testControlFlag](/docs/classes/classQskQuickItem/#function-testcontrolflag)**([Flag](/docs/classes/classQskQuickItem/#enum-flag) flag) const |
| void | **[classBegin](/docs/classes/classQskQuickItem/#function-classbegin)**() override |
| void | **[componentComplete](/docs/classes/classQskQuickItem/#function-componentcomplete)**() override |
| void | **[releaseResources](/docs/classes/classQskQuickItem/#function-releaseresources)**() override |
| bool | **[isPolishScheduled](/docs/classes/classQskQuickItem/#function-ispolishscheduled)**() const |
| bool | **[isUpdateNodeScheduled](/docs/classes/classQskQuickItem/#function-isupdatenodescheduled)**() const |
| bool | **[isInitiallyPainted](/docs/classes/classQskQuickItem/#function-isinitiallypainted)**() const |
| bool | **[maybeUnresized](/docs/classes/classQskQuickItem/#function-maybeunresized)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskQuickItem](/docs/classes/classQskQuickItem/#function-qskquickitem)**(QskQuickItemPrivate & dd, QQuickItem * parent =nullptr) |
| bool | **[event](/docs/classes/classQskQuickItem/#function-event)**(QEvent * event) override |
| virtual void | **[changeEvent](/docs/classes/classQskQuickItem/#function-changeevent)**(QEvent * ) |
| virtual void | **[geometryChangeEvent](/docs/classes/classQskQuickItem/#function-geometrychangeevent)**(QskGeometryChangeEvent * ) |
| virtual void | **[windowChangeEvent](/docs/classes/classQskQuickItem/#function-windowchangeevent)**(QskWindowChangeEvent * ) |
| void | **[itemChange](/docs/classes/classQskQuickItem/#function-itemchange)**(ItemChange , const ItemChangeData & ) override |
| void | **[geometryChange](/docs/classes/classQskQuickItem/#function-geometrychange)**(const QRectF & newGeometry, const QRectF & oldGeometry) override |
| virtual void | **[aboutToShow](/docs/classes/classQskQuickItem/#function-abouttoshow)**() |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[itemFlagsChanged](/docs/classes/classQskQuickItem/#signal-itemflagschanged)**() |
| void | **[controlFlagsChanged](/docs/classes/classQskQuickItem/#signal-controlflagschanged)**() |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setGeometry](/docs/classes/classQskQuickItem/#slot-setgeometry)**(const QRectF & rect) |
| void | **[show](/docs/classes/classQskQuickItem/#slot-show)**() |
| void | **[hide](/docs/classes/classQskQuickItem/#slot-hide)**() |
| void | **[setVisible](/docs/classes/classQskQuickItem/#slot-setvisible)**(bool on) |
| void | **[resetImplicitSize](/docs/classes/classQskQuickItem/#slot-resetimplicitsize)**() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QRectF | **[geometry](/docs/classes/classQskQuickItem/#property-geometry)**  |
| QRectF | **[rect](/docs/classes/classQskQuickItem/#property-rect)**  |
| bool | **[transparentForPositioners](/docs/classes/classQskQuickItem/#property-transparentforpositioners)**  |
| bool | **[tabFence](/docs/classes/classQskQuickItem/#property-tabfence)**  |
| bool | **[polishOnResize](/docs/classes/classQskQuickItem/#property-polishonresize)**  |
| bool | **[visibleToParent](/docs/classes/classQskQuickItem/#property-visibletoparent)**  |
| bool | **[hasChildItems](/docs/classes/classQskQuickItem/#property-haschilditems)**  |
| bool | **[initiallyPainted](/docs/classes/classQskQuickItem/#property-initiallypainted)**  |

## Detailed Description

```cpp
class QskQuickItem;
```


[QskQuickItem](/docs/classes/classQskQuickItem/) completes the C++ API of QQuickItem and reestablishs basic concepts like events. It also offers better control over the operations happening in the update cycle. 

## Public Types Documentation

### enum Flag

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| DeferredUpdate |  1 << 0|  

```
Creating of sceme graph nodes is blocked when being invisible.

The default implementation of Qt/Quick creates scene graph nodes for all items
in the scene what might become a significant factor for the startup performance
( and memory footprint ) of large user interfaces.

Instead of trying to work around these problems by asynchrounous instantiation
strategies ( QQmlIncubator ) the DeferredUpdate flag offers a much simpler
and obvious solution: don't instantiate before really needed.
``` |
| DeferredPolish |  1 << 1|  

```
Polishing an item ( QQuickItem::polish() ) is blocked when being invisible.
F.e for all items being derived from QskControl the layout calculations
happen during polishing.
``` |
| DeferredLayout |  1 << 2|  

```
Recalculations of the implicitSize are blocked until being explicitely requested by
QQuickItem::implicitSize().

When being enabled the item indicates layout relevant changes by
sending a QEvent::LayoutRequest ( similar to QWidget ) to its parent item
without recalculating the actual size hints ( f.e the implicitSize ).

When having layout code that relies on binding the implicit width/height
the QskQuickItem::DeferredLayout flag needs to be disabled.
``` |
| CleanupOnVisibility |  1 << 3|  

```
Delete scene graph nodes, when the item becomes hidden ( QQuickItem::isVisible() ).
Enabling this mode will reduce the memory footprint, but comes at the cost
of having to recreate nodes once the item gets shown again.
``` |
| PreferRasterForTextures |  1 << 4|  

```
When creating textures from QskGraphic, prefer the raster paint
engine over the OpenGL paint engine.
``` |
| DebugForceBackground |  1 << 7|  

```
Always fill the background of the item with a random color.
\note This flag is useful when analyzing layouts.
``` |




Qt/Quick classes have a tendency to update items too early and too often. To avoid processing of unwanted operations [QskQuickItem](/docs/classes/classQskQuickItem/) implements a couple of modifications, that can be en/disabled individually. 


## Public Functions Documentation

### function ~QskQuickItem

```cpp
~QskQuickItem() override
```


### function className

```cpp
const char * className() const
```


**Return**: Class name 

A convenience wrapper for metaObject()->[className()](/docs/classes/classQskQuickItem/#function-classname)


### function isVisibleTo

```cpp
bool isVisibleTo(
    const QQuickItem * ancestor
) const
```


**Parameters**: 

  * **ancestor** Ancestor is the parentItem() hierarchy 


**See**: [visibleToParent](/docs/classes/classQskQuickItem/#property-visibletoparent)

**Return**: true if this item would become visible if ancestor is shown; otherwise returns false.

The true case occurs if neither the item itself nor any parent up to but excluding ancestor has been explicitly hidden.


### function isVisibleToParent

```cpp
bool isVisibleToParent() const
```


**See**: [visibleToParent](/docs/classes/classQskQuickItem/#property-visibletoparent), QQuickItem::setVisible() 

**Return**: true once QQuickItem::setVisible( false ) has been called

An item might be invisible because it has been explicitly hidden or one of its ancestors has been hidden. [isVisibleToParent()](/docs/classes/classQskQuickItem/#function-isvisibletoparent) indicates the first situation.


### function hasChildItems

```cpp
inline bool hasChildItems() const
```


### function rect

```cpp
QRectF rect() const
```


### function implicitSize

```cpp
inline QSizeF implicitSize() const
```


**See**: QQuickItem::implicitWidth(), QQuickItem::implicitHeight(), QskControl::preferredSize(), QskControl::sizeHint() 

**Return**: Implicit size,

**Note**: Layout code that relies on property bindings of the implicit width a height needs to disable the [QskQuickItem::DeferredLayout](/docs/classes/classQskQuickItem/#enumvalue-deferredlayout) flag

Qt/Quick offers an oversimplified layout system of Qt/Quick that is based on the property bindings of implicit width and height. QSkinny restablishs a layout system that can compete with what is available in the Qt/Widgets or Qt/Graphics technologies.

In the QSkinny layout system the implicitSize is a synonym for what is also known as sizeHint or preferredSize.


### function setGeometry

```cpp
void setGeometry(
    qreal x,
    qreal y,
    qreal width,
    qreal height
)
```


**Parameters**: 

  * **x** X ( = left ) coordinate relative to the parent item 
  * **y** Y ( = top ) coordinate relative to the parent item 
  * **width** Width 
  * **height** Height


**See**: [geometry()](/docs/classes/classQskQuickItem/#property-geometry), [geometryChange()](/docs/classes/classQskQuickItem/#function-geometrychange), QQuickItem::size(), QQuickItem::position() 

Set the position and the size of an item


### function geometry

```cpp
QRectF geometry() const
```


**See**: [geometry](/docs/classes/classQskQuickItem/#property-geometry), [setGeometry()](/docs/classes/classQskQuickItem/#function-setgeometry)

**Return**: Position and size relative to the parent item 

### function setPolishOnResize

```cpp
void setPolishOnResize(
    bool on
)
```


**See**: [polishOnResize](/docs/classes/classQskQuickItem/#property-polishonresize)

Set or clear the polishOnResize flag. 


### function polishOnResize

```cpp
bool polishOnResize() const
```


**See**: [setPolishOnResize()](/docs/classes/classQskQuickItem/#function-setpolishonresize)

**Return**: Value of the polishOnResize flag 

### function setTransparentForPositioner

```cpp
void setTransparentForPositioner(
    bool on
)
```


**See**: [isTransparentForPositioner()](/docs/classes/classQskQuickItem/#function-istransparentforpositioner)

Set or clear the transparentForPositioner flag 


### function isTransparentForPositioner

```cpp
bool isTransparentForPositioner() const
```


**See**: transparentForPositioner 

**Return**: Value of the transparentForPositioner flag 

### function setTabFence

```cpp
void setTabFence(
    bool on
)
```


**See**: [isTabFence()](/docs/classes/classQskQuickItem/#function-istabfence)

Set or clear the tabFence property 


### function isTabFence

```cpp
bool isTabFence() const
```


**See**: [setTransparentForPositioner()](/docs/classes/classQskQuickItem/#function-settransparentforpositioner)

**Return**: Value of the tabFence property 

### function setLayoutMirroring

```cpp
void setLayoutMirroring(
    bool on,
    bool recursive =false
)
```


bla 


### function resetLayoutMirroring

```cpp
void resetLayoutMirroring()
```


bla 


### function layoutMirroring

```cpp
bool layoutMirroring() const
```


bla 


### function setControlFlags

```cpp
void setControlFlags(
    Flags flags
)
```


bla 


### function resetControlFlags

```cpp
void resetControlFlags()
```


bla 


### function controlFlags

```cpp
Flags controlFlags() const
```


bla 


### function setControlFlag

```cpp
Q_INVOKABLE void setControlFlag(
    Flag flag,
    bool on =true
)
```


bla 


### function resetControlFlag

```cpp
Q_INVOKABLE void resetControlFlag(
    Flag flag
)
```


bla 


### function testControlFlag

```cpp
Q_INVOKABLE bool testControlFlag(
    Flag flag
) const
```


bla 


### function classBegin

```cpp
void classBegin() override
```


bla 


### function componentComplete

```cpp
void componentComplete() override
```


bla 


### function releaseResources

```cpp
void releaseResources() override
```


bla 


### function isPolishScheduled

```cpp
bool isPolishScheduled() const
```


bla 


### function isUpdateNodeScheduled

```cpp
bool isUpdateNodeScheduled() const
```


bla 


### function isInitiallyPainted

```cpp
bool isInitiallyPainted() const
```


bla 


### function maybeUnresized

```cpp
bool maybeUnresized() const
```


bla 


## Protected Functions Documentation

### function QskQuickItem

```cpp
QskQuickItem(
    QskQuickItemPrivate & dd,
    QQuickItem * parent =nullptr
)
```


Sets the QQuickItem::ItemHasContents flag to true. 


### function event

```cpp
bool event(
    QEvent * event
) override
```


bla 


### function changeEvent

```cpp
virtual void changeEvent(
    QEvent * 
)
```


bla 


### function geometryChangeEvent

```cpp
virtual void geometryChangeEvent(
    QskGeometryChangeEvent * 
)
```


**Parameters**: 

  * **event** Event indicating the geometry change


**See**: QObject::installEventFilter(), [geometryChange()](/docs/classes/classQskQuickItem/#function-geometrychange)

**Reimplemented by**: [QskLinearBox::geometryChangeEvent](/docs/classes/classQskLinearBox/#function-geometrychangeevent)


For no known reason QQuickItem propagates changes of position and size by calling QQuickItem::geometryChange(), instead of using events.

[QskQuickItem](/docs/classes/classQskQuickItem/) reestablished the more powerful concept of events by sending/posting events, that can be preprocessed by event filtering.


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


bla 


### function geometryChange

```cpp
void geometryChange(
    const QRectF & newGeometry,
    const QRectF & oldGeometry
) override
```


**See**: [geometryChangeEvent()](/docs/classes/classQskQuickItem/#function-geometrychangeevent), [polishOnResize()](/docs/classes/classQskQuickItem/#property-polishonresize)

This overloaded notifier calls QQuickItem::polish() depending on the [polishOnResize()](/docs/classes/classQskQuickItem/#property-polishonresize) flag and forwards the notification to the event queue.


### function aboutToShow

```cpp
virtual void aboutToShow()
```


**See**: [initiallyPainted](/docs/classes/classQskQuickItem/#property-initiallypainted), QQuickItem::setVisible() 

void

A specific hook that is intended to be overloaded by controls that need to do some specific operations, when an item is painted the first time after becoming visisble.

The default implementation is a no operation.


## Public Signals Documentation

### signal itemFlagsChanged

```cpp
void itemFlagsChanged()
```


bla 


### signal controlFlagsChanged

```cpp
void controlFlagsChanged()
```


bla 


## Public Slots Documentation

### slot setGeometry

```cpp
inline void setGeometry(
    const QRectF & rect
)
```


**Parameters**: 

  * **rect** Geometry relative to the parent item


**See**: [geometry()](/docs/classes/classQskQuickItem/#property-geometry), [geometryChange()](/docs/classes/classQskQuickItem/#function-geometrychange), QQuickItem::size(), QQuickItem::position() 

Set the position and the size of an item


### slot show

```cpp
void show()
```


bla 


### slot hide

```cpp
void hide()
```


bla 


### slot setVisible

```cpp
void setVisible(
    bool on
)
```


bla 


### slot resetImplicitSize

```cpp
void resetImplicitSize()
```


bla 


## Public Property Documentation

### property geometry

```cpp
QRectF geometry;
```


**See**: [geometryChangeEvent()](/docs/classes/classQskQuickItem/#function-geometrychangeevent), [geometryChange()](/docs/classes/classQskQuickItem/#function-geometrychange), [rect](/docs/classes/classQskQuickItem/#property-rect)

This property holds the geometry of the item relative to its parent item. When changing the geometry, the item receives a QskEvent::GeometryChange event.


### property rect

```cpp
QRectF rect;
```


**See**: 

  * [geometryChangeEvent()](/docs/classes/classQskQuickItem/#function-geometrychangeevent), [geometryChange()](/docs/classes/classQskQuickItem/#function-geometrychange), [geometry](/docs/classes/classQskQuickItem/#property-geometry)
  * [geometry](/docs/classes/classQskQuickItem/#property-geometry)


**Return**: Internal geometry of the item, where the position is always at ( 0, 0 ) 

This property returns the internal geometry of the item. It equals QRect(0, 0, width(), height() ).


### property transparentForPositioners

```cpp
bool transparentForPositioners;
```


**See**: [isTransparentForPositioner()](/docs/classes/classQskQuickItem/#function-istransparentforpositioner)

When transparentForPositioners is set the item indicates, that it should be excluded from any layout calculations. This flag is actually a concept of QQuickItem, that has not been exposed to its public API.


### property tabFence

```cpp
bool tabFence;
```


**See**: [isTabFence()](/docs/classes/classQskQuickItem/#function-istabfence), QQuickItem::ItemIsFocusScope 

The tabFence flag can be used to create local tab focus chains. It is usually used in combination with QQuickItem::ItemIsFocusScope.

QskPopup is an example where the focus tab chain is expected to continue with the first child instead of leaving the popup, when reaching its end.


### property polishOnResize

```cpp
bool polishOnResize;
```


**See**: QskControl::updateLayout(), QskControl::autoLayoutChildren 

When polishOnResize is set QQuickItem::polish() will be called automatically whenevent the size of the item has been changed. This is usually necessary when the item is a container and the layout of its children depends on the size of the container.


### property visibleToParent

```cpp
bool visibleToParent;
```


**See**: [isVisibleToParent()](/docs/classes/classQskQuickItem/#function-isvisibletoparent), QQuickItem::setVisible() 

Flag indicating if an item would become visible if its parentItem() is shown. The implementation relies on the internal explicitVisible flag, that has not been exposed by the public API of QQuickItem.

In many situations it is important to know if an item has been explicitly hidden because of a setVisible( false ) or it is a child of an item, that is in an invisible state. F,e for calculating the size hint for a hidden container it is necessary to know which children would stay hidden when the container becomes visible.


### property hasChildItems

```cpp
bool hasChildItems;
```


**See**: 

  * QQuickItem::childItems(), QQuickItem::parentItem()
  * [hasChildItems](/docs/classes/classQskQuickItem/#property-haschilditems)


**Return**: true, if the item has child items 

A property indicating if the item has child items.


### property initiallyPainted

```cpp
bool initiallyPainted;
```


**See**: [isInitiallyPainted()](/docs/classes/classQskQuickItem/#function-isinitiallypainted), [aboutToShow()](/docs/classes/classQskQuickItem/#function-abouttoshow)

Status flag indicating that there has already been a call of QQuickItem::updatePaintNode() since the item has become visible.

Before each initial call of updatePaintNode() the specific hook [aboutToShow()](/docs/classes/classQskQuickItem/#function-abouttoshow) is called, that is intended to be overloaded.


-------------------------------

Updated on  3 February 2021 at 15:05:45 CET