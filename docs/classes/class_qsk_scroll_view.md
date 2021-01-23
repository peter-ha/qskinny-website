---
title: QskScrollView
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from QskScrollBox

Inherited by [QskListView](/docs/classes/class_qsk_list_view/), [QskScrollArea](/docs/classes/class_qsk_scroll_area/)

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[verticalScrollBarPolicyChanged](/docs/classes/class_qsk_scroll_view/#signal-verticalscrollbarpolicychanged)**() |
| void | **[horizontalScrollBarPolicyChanged](/docs/classes/class_qsk_scroll_view/#signal-horizontalscrollbarpolicychanged)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QSK_SUBCONTROLS](/docs/classes/class_qsk_scroll_view/#function-qsk_subcontrols)**(Panel , Viewport , HorizontalScrollBar , HorizontalScrollHandle , VerticalScrollBar , VerticalScrollHandle ) |
| | **[~QskScrollView](/docs/classes/class_qsk_scroll_view/#function-~qskscrollview)**() override |
| void | **[setVerticalScrollBarPolicy](/docs/classes/class_qsk_scroll_view/#function-setverticalscrollbarpolicy)**(Qt::ScrollBarPolicy policy) |
| Qt::ScrollBarPolicy | **[verticalScrollBarPolicy](/docs/classes/class_qsk_scroll_view/#function-verticalscrollbarpolicy)**() const |
| void | **[setHorizontalScrollBarPolicy](/docs/classes/class_qsk_scroll_view/#function-sethorizontalscrollbarpolicy)**(Qt::ScrollBarPolicy policy) |
| Qt::ScrollBarPolicy | **[horizontalScrollBarPolicy](/docs/classes/class_qsk_scroll_view/#function-horizontalscrollbarpolicy)**() const |
| Qt::Orientations | **[scrollableOrientations](/docs/classes/class_qsk_scroll_view/#function-scrollableorientations)**() const |
| bool | **[isScrolling](/docs/classes/class_qsk_scroll_view/#function-isscrolling)**(Qt::Orientation orientation) const |
| QRectF | **[viewContentsRect](/docs/classes/class_qsk_scroll_view/#function-viewcontentsrect)**() const override |
| QskAnimationHint | **[flickHint](/docs/classes/class_qsk_scroll_view/#function-flickhint)**() const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[mouseMoveEvent](/docs/classes/class_qsk_scroll_view/#function-mousemoveevent)**(QMouseEvent * event) override |
| void | **[mousePressEvent](/docs/classes/class_qsk_scroll_view/#function-mousepressevent)**(QMouseEvent * event) override |
| void | **[mouseReleaseEvent](/docs/classes/class_qsk_scroll_view/#function-mousereleaseevent)**(QMouseEvent * event) override |
| QPointF | **[scrollOffset](/docs/classes/class_qsk_scroll_view/#function-scrolloffset)**(const QWheelEvent * event) const override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| Qt::ScrollBarPolicy | **[verticalScrollBarPolicy](/docs/classes/class_qsk_scroll_view/#property-verticalscrollbarpolicy)**  |
| Qt::ScrollBarPolicy | **[horizontalScrollBarPolicy](/docs/classes/class_qsk_scroll_view/#property-horizontalscrollbarpolicy)**  |

## Public Signals Documentation

### signal verticalScrollBarPolicyChanged

```cpp
void verticalScrollBarPolicyChanged()
```


### signal horizontalScrollBarPolicyChanged

```cpp
void horizontalScrollBarPolicyChanged()
```


## Public Functions Documentation

### function QSK_SUBCONTROLS

```cpp
QSK_SUBCONTROLS(
    Panel ,
    Viewport ,
    HorizontalScrollBar ,
    HorizontalScrollHandle ,
    VerticalScrollBar ,
    VerticalScrollHandle 
)
```


### function ~QskScrollView

```cpp
~QskScrollView() override
```


### function setVerticalScrollBarPolicy

```cpp
void setVerticalScrollBarPolicy(
    Qt::ScrollBarPolicy policy
)
```


### function verticalScrollBarPolicy

```cpp
Qt::ScrollBarPolicy verticalScrollBarPolicy() const
```


### function setHorizontalScrollBarPolicy

```cpp
void setHorizontalScrollBarPolicy(
    Qt::ScrollBarPolicy policy
)
```


### function horizontalScrollBarPolicy

```cpp
Qt::ScrollBarPolicy horizontalScrollBarPolicy() const
```


### function scrollableOrientations

```cpp
Qt::Orientations scrollableOrientations() const
```


### function isScrolling

```cpp
bool isScrolling(
    Qt::Orientation orientation
) const
```


### function viewContentsRect

```cpp
QRectF viewContentsRect() const override
```


### function flickHint

```cpp
QskAnimationHint flickHint() const override
```


## Protected Functions Documentation

### function mouseMoveEvent

```cpp
void mouseMoveEvent(
    QMouseEvent * event
) override
```


### function mousePressEvent

```cpp
void mousePressEvent(
    QMouseEvent * event
) override
```


### function mouseReleaseEvent

```cpp
void mouseReleaseEvent(
    QMouseEvent * event
) override
```


### function scrollOffset

```cpp
QPointF scrollOffset(
    const QWheelEvent * event
) const override
```


## Public Property Documentation

### property verticalScrollBarPolicy

```cpp
Qt::ScrollBarPolicy verticalScrollBarPolicy;
```


### property horizontalScrollBarPolicy

```cpp
Qt::ScrollBarPolicy horizontalScrollBarPolicy;
```


-------------------------------

Updated on 23 January 2021 at 09:50:35 CET