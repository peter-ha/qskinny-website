---
title: QskScrollBox
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from [QskControl](/docs/classes/classQskControl/), [QskQuickItem](/docs/classes/classQskQuickItem/), QskSkinnable

Inherited by [QskScrollView](/docs/classes/classQskScrollView/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskScrollBox](/docs/classes/classQskScrollBox/#function-qskscrollbox)**(QQuickItem * parent =nullptr) |
| | **[~QskScrollBox](/docs/classes/classQskScrollBox/#function-~qskscrollbox)**() override |
| void | **[setAutoScrollFocusedItem](/docs/classes/classQskScrollBox/#function-setautoscrollfocuseditem)**(bool on) |
| bool | **[autoScrollFocusItem](/docs/classes/classQskScrollBox/#function-autoscrollfocusitem)**() const |
| void | **[setFlickableOrientations](/docs/classes/classQskScrollBox/#function-setflickableorientations)**(Qt::Orientations orientations) |
| Qt::Orientations | **[flickableOrientations](/docs/classes/classQskScrollBox/#function-flickableorientations)**() const |
| int | **[flickRecognizerTimeout](/docs/classes/classQskScrollBox/#function-flickrecognizertimeout)**() const |
| void | **[setFlickRecognizerTimeout](/docs/classes/classQskScrollBox/#function-setflickrecognizertimeout)**(int timeout) |
| virtual QskAnimationHint | **[flickHint](/docs/classes/classQskScrollBox/#function-flickhint)**() const =0 |
| QPointF | **[scrollPos](/docs/classes/classQskScrollBox/#function-scrollpos)**() const |
| QSizeF | **[scrollableSize](/docs/classes/classQskScrollBox/#function-scrollablesize)**() const |
| virtual QRectF | **[viewContentsRect](/docs/classes/classQskScrollBox/#function-viewcontentsrect)**() const =0 |
| QRectF | **[gestureRect](/docs/classes/classQskScrollBox/#function-gesturerect)**() const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[geometryChangeEvent](/docs/classes/classQskScrollBox/#function-geometrychangeevent)**(QskGeometryChangeEvent * event) override |
| void | **[windowChangeEvent](/docs/classes/classQskScrollBox/#function-windowchangeevent)**(QskWindowChangeEvent * event) override |
| void | **[gestureEvent](/docs/classes/classQskScrollBox/#function-gestureevent)**(QskGestureEvent * event) override |
| void | **[wheelEvent](/docs/classes/classQskScrollBox/#function-wheelevent)**(QWheelEvent * event) override |
| virtual QPointF | **[scrollOffset](/docs/classes/classQskScrollBox/#function-scrolloffset)**(const QWheelEvent * event) const |
| bool | **[gestureFilter](/docs/classes/classQskScrollBox/#function-gesturefilter)**(QQuickItem * item, QEvent * event) override |
| void | **[setScrollableSize](/docs/classes/classQskScrollBox/#function-setscrollablesize)**(const QSizeF & size) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[scrolledTo](/docs/classes/classQskScrollBox/#signal-scrolledto)**(const QPointF & ) |
| void | **[scrollPosChanged](/docs/classes/classQskScrollBox/#signal-scrollposchanged)**() |
| void | **[scrollableSizeChanged](/docs/classes/classQskScrollBox/#signal-scrollablesizechanged)**(const QSizeF & ) |
| void | **[autoScrollFocusedItemChanged](/docs/classes/classQskScrollBox/#signal-autoscrollfocuseditemchanged)**(bool ) |
| void | **[flickableOrientationsChanged](/docs/classes/classQskScrollBox/#signal-flickableorientationschanged)**() |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setScrollPos](/docs/classes/classQskScrollBox/#slot-setscrollpos)**(const QPointF & pos) |
| void | **[scrollTo](/docs/classes/classQskScrollBox/#slot-scrollto)**(const QPointF & pos) |
| void | **[ensureItemVisible](/docs/classes/classQskScrollBox/#slot-ensureitemvisible)**(const QQuickItem * item) |
| void | **[ensureFocusItemVisible](/docs/classes/classQskScrollBox/#slot-ensurefocusitemvisible)**() |
| void | **[ensureVisible](/docs/classes/classQskScrollBox/#slot-ensurevisible)**(const QPointF & pos) |
| void | **[ensureVisible](/docs/classes/classQskScrollBox/#slot-ensurevisible)**(const QRectF & itemRect) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QPointF | **[scrollPos](/docs/classes/classQskScrollBox/#property-scrollpos)**  |
| Qt::Orientations | **[flickableOrientations](/docs/classes/classQskScrollBox/#property-flickableorientations)**  |
| bool | **[autoScrollFocusedItem](/docs/classes/classQskScrollBox/#property-autoscrollfocuseditem)**  |

## Public Functions Documentation

### function QskScrollBox

```cpp
QskScrollBox(
    QQuickItem * parent =nullptr
)
```


### function ~QskScrollBox

```cpp
~QskScrollBox() override
```


### function setAutoScrollFocusedItem

```cpp
void setAutoScrollFocusedItem(
    bool on
)
```


### function autoScrollFocusItem

```cpp
bool autoScrollFocusItem() const
```


### function setFlickableOrientations

```cpp
void setFlickableOrientations(
    Qt::Orientations orientations
)
```


### function flickableOrientations

```cpp
Qt::Orientations flickableOrientations() const
```


### function flickRecognizerTimeout

```cpp
int flickRecognizerTimeout() const
```


### function setFlickRecognizerTimeout

```cpp
void setFlickRecognizerTimeout(
    int timeout
)
```


### function flickHint

```cpp
virtual QskAnimationHint flickHint() const =0
```


### function scrollPos

```cpp
QPointF scrollPos() const
```


### function scrollableSize

```cpp
QSizeF scrollableSize() const
```


### function viewContentsRect

```cpp
virtual QRectF viewContentsRect() const =0
```


### function gestureRect

```cpp
QRectF gestureRect() const override
```


## Protected Functions Documentation

### function geometryChangeEvent

```cpp
void geometryChangeEvent(
    QskGeometryChangeEvent * event
) override
```


### function windowChangeEvent

```cpp
void windowChangeEvent(
    QskWindowChangeEvent * event
) override
```


### function gestureEvent

```cpp
void gestureEvent(
    QskGestureEvent * event
) override
```


### function wheelEvent

```cpp
void wheelEvent(
    QWheelEvent * event
) override
```


### function scrollOffset

```cpp
virtual QPointF scrollOffset(
    const QWheelEvent * event
) const
```


### function gestureFilter

```cpp
bool gestureFilter(
    QQuickItem * item,
    QEvent * event
) override
```


### function setScrollableSize

```cpp
void setScrollableSize(
    const QSizeF & size
)
```


## Public Signals Documentation

### signal scrolledTo

```cpp
void scrolledTo(
    const QPointF & 
)
```


### signal scrollPosChanged

```cpp
void scrollPosChanged()
```


### signal scrollableSizeChanged

```cpp
void scrollableSizeChanged(
    const QSizeF & 
)
```


### signal autoScrollFocusedItemChanged

```cpp
void autoScrollFocusedItemChanged(
    bool 
)
```


### signal flickableOrientationsChanged

```cpp
void flickableOrientationsChanged()
```


## Public Slots Documentation

### slot setScrollPos

```cpp
void setScrollPos(
    const QPointF & pos
)
```


### slot scrollTo

```cpp
void scrollTo(
    const QPointF & pos
)
```


### slot ensureItemVisible

```cpp
void ensureItemVisible(
    const QQuickItem * item
)
```


### slot ensureFocusItemVisible

```cpp
void ensureFocusItemVisible()
```


### slot ensureVisible

```cpp
void ensureVisible(
    const QPointF & pos
)
```


### slot ensureVisible

```cpp
void ensureVisible(
    const QRectF & itemRect
)
```


## Public Property Documentation

### property scrollPos

```cpp
QPointF scrollPos;
```


### property flickableOrientations

```cpp
Qt::Orientations flickableOrientations;
```


### property autoScrollFocusedItem

```cpp
bool autoScrollFocusedItem;
```


-------------------------------

Updated on  3 February 2021 at 15:05:44 CET