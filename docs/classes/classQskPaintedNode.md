---
title: QskPaintedNode
layout: docs

---


**Module:** **[Scenegraph](/docs/modules/group__Scenegraph/)**



Inherits from QskTextureNode

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskPaintedNode](/docs/classes/classQskPaintedNode/#function-qskpaintednode)**() |
| | **[~QskPaintedNode](/docs/classes/classQskPaintedNode/#function-~qskpaintednode)**() override |
| void | **[update](/docs/classes/classQskPaintedNode/#function-update)**(QQuickWindow * window, QskTextureRenderer::RenderMode renderMode, const QRect & rect) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[paint](/docs/classes/classQskPaintedNode/#function-paint)**(QPainter * , const QSizeF & ) =0 |
| virtual uint | **[hash](/docs/classes/classQskPaintedNode/#function-hash)**() =0 |

## Public Functions Documentation

### function QskPaintedNode

```cpp
QskPaintedNode()
```


### function ~QskPaintedNode

```cpp
~QskPaintedNode() override
```


### function update

```cpp
void update(
    QQuickWindow * window,
    QskTextureRenderer::RenderMode renderMode,
    const QRect & rect
)
```


## Protected Functions Documentation

### function paint

```cpp
virtual void paint(
    QPainter * ,
    const QSizeF & 
) =0
```


### function hash

```cpp
virtual uint hash() =0
```


-------------------------------

Updated on  3 February 2021 at 15:05:42 CET