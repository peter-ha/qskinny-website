---
title: QskGraphicPaintEngine
layout: docs

---


**Module:** **[Graphic](/docs/modules/group__Graphic/)**



Inherits from QPaintEngine

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGraphicPaintEngine](/docs/classes/classQskGraphicPaintEngine/#function-qskgraphicpaintengine)**() |
| | **[~QskGraphicPaintEngine](/docs/classes/classQskGraphicPaintEngine/#function-~qskgraphicpaintengine)**() override |
| bool | **[begin](/docs/classes/classQskGraphicPaintEngine/#function-begin)**(QPaintDevice * ) override |
| bool | **[end](/docs/classes/classQskGraphicPaintEngine/#function-end)**() override |
| Type | **[type](/docs/classes/classQskGraphicPaintEngine/#function-type)**() const override |
| void | **[updateState](/docs/classes/classQskGraphicPaintEngine/#function-updatestate)**(const QPaintEngineState & state) override |
| void | **[drawPath](/docs/classes/classQskGraphicPaintEngine/#function-drawpath)**(const QPainterPath & path) override |
| void | **[drawPolygon](/docs/classes/classQskGraphicPaintEngine/#function-drawpolygon)**(const QPointF * points, int pointCount, PolygonDrawMode mode) override |
| void | **[drawPolygon](/docs/classes/classQskGraphicPaintEngine/#function-drawpolygon)**(const QPoint * points, int pointCount, PolygonDrawMode mode) override |
| void | **[drawPixmap](/docs/classes/classQskGraphicPaintEngine/#function-drawpixmap)**(const QRectF & rect, const QPixmap & pixmap, const QRectF & subRect) override |
| void | **[drawImage](/docs/classes/classQskGraphicPaintEngine/#function-drawimage)**(const QRectF & rect, const QImage & image, const QRectF & subRect, Qt::ImageConversionFlags flags) override |
| void | **[drawTextItem](/docs/classes/classQskGraphicPaintEngine/#function-drawtextitem)**(const QPointF & position, const QTextItem & textItem) override |

## Public Functions Documentation

### function QskGraphicPaintEngine

```cpp
QskGraphicPaintEngine()
```


### function ~QskGraphicPaintEngine

```cpp
~QskGraphicPaintEngine() override
```


### function begin

```cpp
bool begin(
    QPaintDevice * 
) override
```


### function end

```cpp
bool end() override
```


### function type

```cpp
Type type() const override
```


### function updateState

```cpp
void updateState(
    const QPaintEngineState & state
) override
```


### function drawPath

```cpp
void drawPath(
    const QPainterPath & path
) override
```


### function drawPolygon

```cpp
void drawPolygon(
    const QPointF * points,
    int pointCount,
    PolygonDrawMode mode
) override
```


### function drawPolygon

```cpp
void drawPolygon(
    const QPoint * points,
    int pointCount,
    PolygonDrawMode mode
) override
```


### function drawPixmap

```cpp
void drawPixmap(
    const QRectF & rect,
    const QPixmap & pixmap,
    const QRectF & subRect
) override
```


### function drawImage

```cpp
void drawImage(
    const QRectF & rect,
    const QImage & image,
    const QRectF & subRect,
    Qt::ImageConversionFlags flags
) override
```


### function drawTextItem

```cpp
void drawTextItem(
    const QPointF & position,
    const QTextItem & textItem
) override
```


-------------------------------

Updated on  3 February 2021 at 15:05:45 CET