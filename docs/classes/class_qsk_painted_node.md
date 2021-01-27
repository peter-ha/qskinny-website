---
title: QskPaintedNode
layout: docs

---


**Module:** **[Scenegraph](/docs/modules/group___scenegraph/)**



Inherits from QskTextureNode

## Public Classes

|                | Name           |
| -------------- | -------------- |
| class | **[PaintHelper](/docs/classes/class_qsk_painted_node_1_1_paint_helper/)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskPaintedNode](/docs/classes/class_qsk_painted_node/#function-qskpaintednode)**() |
| | **[~QskPaintedNode](/docs/classes/class_qsk_painted_node/#function-~qskpaintednode)**() override |
| void | **[update](/docs/classes/class_qsk_painted_node/#function-update)**(QQuickWindow * window, QskTextureRenderer::RenderMode renderMode, const QRect & rect) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[paint](/docs/classes/class_qsk_painted_node/#function-paint)**(QPainter * , const QSizeF & ) =0 |
| virtual uint | **[hash](/docs/classes/class_qsk_painted_node/#function-hash)**() =0 |

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

Updated on 26 January 2021 at 09:44:53 CET