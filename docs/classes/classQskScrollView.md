---
title: QskScrollView
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from QskScrollBox

Inherited by [QskListView](/docs/classes/classQskListView/), [QskScrollArea](/docs/classes/classQskScrollArea/)

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Panel](/docs/classes/classQskScrollView/#subcontrol-panel)**  |
| const QskAspect::Subcontrol | **[Viewport](/docs/classes/classQskScrollView/#subcontrol-viewport)**  |
| const QskAspect::Subcontrol | **[HorizontalScrollBar](/docs/classes/classQskScrollView/#subcontrol-horizontalscrollbar)**  |
| const QskAspect::Subcontrol | **[HorizontalScrollHandle](/docs/classes/classQskScrollView/#subcontrol-horizontalscrollhandle)**  |
| const QskAspect::Subcontrol | **[VerticalScrollBar](/docs/classes/classQskScrollView/#subcontrol-verticalscrollbar)**  |
| const QskAspect::Subcontrol | **[VerticalScrollHandle](/docs/classes/classQskScrollView/#subcontrol-verticalscrollhandle)**  |

## Public States

|                | Name           |
| -------------- | -------------- |
| const QskAspect::State | **[VerticalHandlePressed](/docs/classes/classQskScrollView/#state-verticalhandlepressed)**  |
| const QskAspect::State | **[HorizontalHandlePressed](/docs/classes/classQskScrollView/#state-horizontalhandlepressed)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskScrollView](/docs/classes/classQskScrollView/#function-qskscrollview)**(QQuickItem * parent =nullptr) |
| | **[~QskScrollView](/docs/classes/classQskScrollView/#function-~qskscrollview)**() override |
| void | **[setVerticalScrollBarPolicy](/docs/classes/classQskScrollView/#function-setverticalscrollbarpolicy)**(Qt::ScrollBarPolicy policy) |
| Qt::ScrollBarPolicy | **[verticalScrollBarPolicy](/docs/classes/classQskScrollView/#function-verticalscrollbarpolicy)**() const |
| void | **[setHorizontalScrollBarPolicy](/docs/classes/classQskScrollView/#function-sethorizontalscrollbarpolicy)**(Qt::ScrollBarPolicy policy) |
| Qt::ScrollBarPolicy | **[horizontalScrollBarPolicy](/docs/classes/classQskScrollView/#function-horizontalscrollbarpolicy)**() const |
| Qt::Orientations | **[scrollableOrientations](/docs/classes/classQskScrollView/#function-scrollableorientations)**() const |
| bool | **[isScrolling](/docs/classes/classQskScrollView/#function-isscrolling)**(Qt::Orientation orientation) const |
| QRectF | **[viewContentsRect](/docs/classes/classQskScrollView/#function-viewcontentsrect)**() const override |
| QskAnimationHint | **[flickHint](/docs/classes/classQskScrollView/#function-flickhint)**() const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[mouseMoveEvent](/docs/classes/classQskScrollView/#function-mousemoveevent)**(QMouseEvent * event) override |
| void | **[mousePressEvent](/docs/classes/classQskScrollView/#function-mousepressevent)**(QMouseEvent * event) override |
| void | **[mouseReleaseEvent](/docs/classes/classQskScrollView/#function-mousereleaseevent)**(QMouseEvent * event) override |
| QPointF | **[scrollOffset](/docs/classes/classQskScrollView/#function-scrolloffset)**(const QWheelEvent * event) const override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[verticalScrollBarPolicyChanged](/docs/classes/classQskScrollView/#signal-verticalscrollbarpolicychanged)**() |
| void | **[horizontalScrollBarPolicyChanged](/docs/classes/classQskScrollView/#signal-horizontalscrollbarpolicychanged)**() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| Qt::ScrollBarPolicy | **[verticalScrollBarPolicy](/docs/classes/classQskScrollView/#property-verticalscrollbarpolicy)**  |
| Qt::ScrollBarPolicy | **[horizontalScrollBarPolicy](/docs/classes/classQskScrollView/#property-horizontalscrollbarpolicy)**  |

## Public Subcontrols Documentation

### subcontrol Panel




### subcontrol Viewport




### subcontrol HorizontalScrollBar




### subcontrol HorizontalScrollHandle




### subcontrol VerticalScrollBar




### subcontrol VerticalScrollHandle




## Public States Documentation

### state VerticalHandlePressed




### state HorizontalHandlePressed




## Public Functions Documentation

### function QskScrollView

```cpp
QskScrollView(
    QQuickItem * parent =nullptr
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


## Public Signals Documentation

### signal verticalScrollBarPolicyChanged

```cpp
void verticalScrollBarPolicyChanged()
```


### signal horizontalScrollBarPolicyChanged

```cpp
void horizontalScrollBarPolicyChanged()
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

Updated on  3 February 2021 at 15:05:44 CET