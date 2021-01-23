---
title: QskScrollBox
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from [QskControl](/docs/classes/class_qsk_control/), [QskQuickItem](/docs/classes/class_qsk_quick_item/), [QskSkinnable](/docs/classes/class_qsk_skinnable/), QQuickItem

Inherited by [QskScrollView](/docs/classes/class_qsk_scroll_view/)

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setScrollPos](/docs/classes/class_qsk_scroll_box/#slot-setscrollpos)**(const QPointF & pos) |
| void | **[scrollTo](/docs/classes/class_qsk_scroll_box/#slot-scrollto)**(const QPointF & pos) |
| void | **[ensureItemVisible](/docs/classes/class_qsk_scroll_box/#slot-ensureitemvisible)**(const QQuickItem * item) |
| void | **[ensureFocusItemVisible](/docs/classes/class_qsk_scroll_box/#slot-ensurefocusitemvisible)**() |
| void | **[ensureVisible](/docs/classes/class_qsk_scroll_box/#slot-ensurevisible)**(const QPointF & pos) |
| void | **[ensureVisible](/docs/classes/class_qsk_scroll_box/#slot-ensurevisible)**(const QRectF & itemRect) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[scrolledTo](/docs/classes/class_qsk_scroll_box/#signal-scrolledto)**(const QPointF & ) |
| void | **[scrollPosChanged](/docs/classes/class_qsk_scroll_box/#signal-scrollposchanged)**() |
| void | **[scrollableSizeChanged](/docs/classes/class_qsk_scroll_box/#signal-scrollablesizechanged)**(const QSizeF & ) |
| void | **[autoScrollFocusedItemChanged](/docs/classes/class_qsk_scroll_box/#signal-autoscrollfocuseditemchanged)**(bool ) |
| void | **[flickableOrientationsChanged](/docs/classes/class_qsk_scroll_box/#signal-flickableorientationschanged)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskScrollBox](/docs/classes/class_qsk_scroll_box/#function-qskscrollbox)**(QQuickItem * parent =nullptr) |
| | **[~QskScrollBox](/docs/classes/class_qsk_scroll_box/#function-~qskscrollbox)**() override |
| void | **[setAutoScrollFocusedItem](/docs/classes/class_qsk_scroll_box/#function-setautoscrollfocuseditem)**(bool on) |
| bool | **[autoScrollFocusItem](/docs/classes/class_qsk_scroll_box/#function-autoscrollfocusitem)**() const |
| void | **[setFlickableOrientations](/docs/classes/class_qsk_scroll_box/#function-setflickableorientations)**(Qt::Orientations orientations) |
| Qt::Orientations | **[flickableOrientations](/docs/classes/class_qsk_scroll_box/#function-flickableorientations)**() const |
| int | **[flickRecognizerTimeout](/docs/classes/class_qsk_scroll_box/#function-flickrecognizertimeout)**() const |
| void | **[setFlickRecognizerTimeout](/docs/classes/class_qsk_scroll_box/#function-setflickrecognizertimeout)**(int timeout) |
| virtual QskAnimationHint | **[flickHint](/docs/classes/class_qsk_scroll_box/#function-flickhint)**() const =0 |
| QPointF | **[scrollPos](/docs/classes/class_qsk_scroll_box/#function-scrollpos)**() const |
| QSizeF | **[scrollableSize](/docs/classes/class_qsk_scroll_box/#function-scrollablesize)**() const |
| virtual QRectF | **[viewContentsRect](/docs/classes/class_qsk_scroll_box/#function-viewcontentsrect)**() const =0 |
| QRectF | **[gestureRect](/docs/classes/class_qsk_scroll_box/#function-gesturerect)**() const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[geometryChangeEvent](/docs/classes/class_qsk_scroll_box/#function-geometrychangeevent)**(QskGeometryChangeEvent * event) override |
| void | **[windowChangeEvent](/docs/classes/class_qsk_scroll_box/#function-windowchangeevent)**(QskWindowChangeEvent * event) override |
| void | **[gestureEvent](/docs/classes/class_qsk_scroll_box/#function-gestureevent)**(QskGestureEvent * event) override |
| void | **[wheelEvent](/docs/classes/class_qsk_scroll_box/#function-wheelevent)**(QWheelEvent * event) override |
| virtual QPointF | **[scrollOffset](/docs/classes/class_qsk_scroll_box/#function-scrolloffset)**(const QWheelEvent * event) const |
| bool | **[gestureFilter](/docs/classes/class_qsk_scroll_box/#function-gesturefilter)**(QQuickItem * item, QEvent * event) override |
| void | **[setScrollableSize](/docs/classes/class_qsk_scroll_box/#function-setscrollablesize)**(const QSizeF & size) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QPointF | **[scrollPos](/docs/classes/class_qsk_scroll_box/#property-scrollpos)**  |
| Qt::Orientations | **[flickableOrientations](/docs/classes/class_qsk_scroll_box/#property-flickableorientations)**  |
| bool | **[autoScrollFocusedItem](/docs/classes/class_qsk_scroll_box/#property-autoscrollfocuseditem)**  |

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

Updated on 23 January 2021 at 09:50:35 CET