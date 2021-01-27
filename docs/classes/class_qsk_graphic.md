---
title: QskGraphic
summary: A paint device for scalable graphics. 
layout: docs

---


**Module:** **[Graphic](/docs/modules/group___graphic/)**



A paint device for scalable graphics.  [More...](#detailed-description)


`#include [/home/peter/dev/qskinny/src/graphic/QskGraphic.h](<QskGraphic.h>)`

Inherits from QPaintDevice

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[RenderHint](/docs/classes/class_qsk_graphic/#enum-renderhint)** { RenderPensUnscaled = 0x1} |
| enum| **[CommandType](/docs/classes/class_qsk_graphic/#enum-commandtype)** { VectorData = 1 << 0, RasterData = 1 << 1, Transformation = 1 << 2} |
| typedef QFlags< RenderHint > | **[RenderHints](/docs/classes/class_qsk_graphic/#typedef-renderhints)**  |
| typedef QFlags< CommandType > | **[CommandTypes](/docs/classes/class_qsk_graphic/#typedef-commandtypes)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGraphic](/docs/classes/class_qsk_graphic/#function-qskgraphic)**() |
| | **[QskGraphic](/docs/classes/class_qsk_graphic/#function-qskgraphic)**(const [QskGraphic](/docs/classes/class_qsk_graphic/) & other) |
| | **[QskGraphic](/docs/classes/class_qsk_graphic/#function-qskgraphic)**([QskGraphic](/docs/classes/class_qsk_graphic/) && other) |
| | **[~QskGraphic](/docs/classes/class_qsk_graphic/#function-~qskgraphic)**() override |
| [QskGraphic](/docs/classes/class_qsk_graphic/) & | **[operator=](/docs/classes/class_qsk_graphic/#function-operator=)**(const [QskGraphic](/docs/classes/class_qsk_graphic/) & other) |
| [QskGraphic](/docs/classes/class_qsk_graphic/) & | **[operator=](/docs/classes/class_qsk_graphic/#function-operator=)**([QskGraphic](/docs/classes/class_qsk_graphic/) && other) |
| bool | **[operator==](/docs/classes/class_qsk_graphic/#function-operator==)**(const [QskGraphic](/docs/classes/class_qsk_graphic/) & other) const |
| bool | **[operator!=](/docs/classes/class_qsk_graphic/#function-operator!=)**(const [QskGraphic](/docs/classes/class_qsk_graphic/) & other) const |
| void | **[reset](/docs/classes/class_qsk_graphic/#function-reset)**() |
| bool | **[isNull](/docs/classes/class_qsk_graphic/#function-isnull)**() const |
| bool | **[isEmpty](/docs/classes/class_qsk_graphic/#function-isempty)**() const |
| CommandTypes | **[commandTypes](/docs/classes/class_qsk_graphic/#function-commandtypes)**() const |
| void | **[render](/docs/classes/class_qsk_graphic/#function-render)**(QPainter * painter) const |
| void | **[render](/docs/classes/class_qsk_graphic/#function-render)**(QPainter * painter, const QskColorFilter & colorFilter, QTransform * initialTransform =nullptr) const |
| void | **[render](/docs/classes/class_qsk_graphic/#function-render)**(QPainter * painter, const QSizeF & size, Qt::AspectRatioMode aspectRatioMode =Qt::IgnoreAspectRatio) const |
| void | **[render](/docs/classes/class_qsk_graphic/#function-render)**(QPainter * painter, const QPointF & pos, Qt::Alignment alignment =Qt::AlignTop|Qt::AlignLeft) const |
| void | **[render](/docs/classes/class_qsk_graphic/#function-render)**(QPainter * painter, const QRectF & rect, Qt::AspectRatioMode aspectRatioMode =Qt::IgnoreAspectRatio) const |
| void | **[render](/docs/classes/class_qsk_graphic/#function-render)**(QPainter * painter, const QRectF & rect, const QskColorFilter & colorFilter, Qt::AspectRatioMode aspectRatioMode =Qt::IgnoreAspectRatio) const |
| QPixmap | **[toPixmap](/docs/classes/class_qsk_graphic/#function-topixmap)**(qreal devicePixelRatio =0.0) const |
| QPixmap | **[toPixmap](/docs/classes/class_qsk_graphic/#function-topixmap)**(const QSize & size, Qt::AspectRatioMode aspectRatioMode =Qt::IgnoreAspectRatio, qreal devicePixelRatio =0.0) const |
| QImage | **[toImage](/docs/classes/class_qsk_graphic/#function-toimage)**(qreal devicePixelRatio =0.0) const |
| QImage | **[toImage](/docs/classes/class_qsk_graphic/#function-toimage)**(const QSize & size, Qt::AspectRatioMode aspectRatioMode =Qt::IgnoreAspectRatio, qreal devicePixelRatio =0.0) const |
| QRectF | **[scaledBoundingRect](/docs/classes/class_qsk_graphic/#function-scaledboundingrect)**(qreal sx, qreal sy) const |
| QRectF | **[boundingRect](/docs/classes/class_qsk_graphic/#function-boundingrect)**() const |
| QRectF | **[controlPointRect](/docs/classes/class_qsk_graphic/#function-controlpointrect)**() const |
| const QVector< QskPainterCommand > & | **[commands](/docs/classes/class_qsk_graphic/#function-commands)**() const |
| void | **[setCommands](/docs/classes/class_qsk_graphic/#function-setcommands)**(const QVector< QskPainterCommand > & commands) |
| void | **[setDefaultSize](/docs/classes/class_qsk_graphic/#function-setdefaultsize)**(const QSizeF & size) |
| QSizeF | **[defaultSize](/docs/classes/class_qsk_graphic/#function-defaultsize)**() const |
| qreal | **[heightForWidth](/docs/classes/class_qsk_graphic/#function-heightforwidth)**(qreal width) const |
| qreal | **[widthForHeight](/docs/classes/class_qsk_graphic/#function-widthforheight)**(qreal height) const |
| void | **[setRenderHint](/docs/classes/class_qsk_graphic/#function-setrenderhint)**(RenderHint hint, bool on =true) |
| bool | **[testRenderHint](/docs/classes/class_qsk_graphic/#function-testrenderhint)**(RenderHint hint) const |
| RenderHints | **[renderHints](/docs/classes/class_qsk_graphic/#function-renderhints)**() const |
| QPaintEngine * | **[paintEngine](/docs/classes/class_qsk_graphic/#function-paintengine)**() const override |
| int | **[metric](/docs/classes/class_qsk_graphic/#function-metric)**(PaintDeviceMetric metric) const override |
| [QskGraphic](/docs/classes/class_qsk_graphic/) | **[fromImage](/docs/classes/class_qsk_graphic/#function-fromimage)**(const QImage & image) |
| [QskGraphic](/docs/classes/class_qsk_graphic/) | **[fromPixmap](/docs/classes/class_qsk_graphic/#function-frompixmap)**(const QPixmap & pixmap) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual QSize | **[sizeMetrics](/docs/classes/class_qsk_graphic/#function-sizemetrics)**() const |
| virtual void | **[drawPath](/docs/classes/class_qsk_graphic/#function-drawpath)**(const QPainterPath & path) |
| virtual void | **[drawPixmap](/docs/classes/class_qsk_graphic/#function-drawpixmap)**(const QRectF & rect, const QPixmap & pixmap, const QRectF & subRect) |
| virtual void | **[drawImage](/docs/classes/class_qsk_graphic/#function-drawimage)**(const QRectF & rect, const QImage & image, const QRectF & subRect, Qt::ImageConversionFlags flags) |
| virtual void | **[updateState](/docs/classes/class_qsk_graphic/#function-updatestate)**(const QPaintEngineState & state) |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[QskGraphicPaintEngine](/docs/classes/class_qsk_graphic/#friend-qskgraphicpaintengine)**  |

## Detailed Description

```cpp
class QskGraphic;
```

A paint device for scalable graphics. 

[QskGraphic](/docs/classes/class_qsk_graphic/) is the representation of a graphic that is tailored for scalability. Like QPicture it will be initialized by QPainter operations and can be replayed later to any target paint device. It can be stored and loaded from disk using the operators from QskGraphicIO. Together with QSvgRenderer it can be used to implement a simple SVG compiler.

[QskGraphic](/docs/classes/class_qsk_graphic/) maps all scalable drawing primitives to a QPainterPath and stores them together with the painter state changes ( pen, brush, transformation ... ) in a list of QskPainterCommand. For being a complete QPaintDevice it also stores pixmaps or images, what is somehow against the idea of the class, because these objects can't be scaled without a loss in quality.

The main issue about scaling a [QskGraphic](/docs/classes/class_qsk_graphic/) object are the pens used for drawing the outlines of the painter paths. While non cosmetic pens ( QPen::isCosmetic() ) are scaled with the same ratio as the path, cosmetic pens have a fixed width. A graphic might have paths with different pens - cosmetic and non-cosmetic.

[QskGraphic](/docs/classes/class_qsk_graphic/) caches 2 different rectangles:



* control point rectangle

 The control point rectangle is the bounding rectangle of all control point rectangles of the painter paths, or the target rectangle of the pixmaps/images.
* bounding rectangle

 The bounding rectangle extends the control point rectangle by what is needed for rendering the outline with an unscaled pen.
Because the offset for drawing the outline depends on the shape of the painter path ( the peak of a triangle is different than the flat side ) scaling with a fixed aspect ratio always needs to be calculated from the control point rectangle. 

## Public Types Documentation

### enum RenderHint

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| RenderPensUnscaled | 0x1|   |




### enum CommandType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| VectorData | 1 << 0|   |
| RasterData | 1 << 1|   |
| Transformation | 1 << 2|   |




### typedef RenderHints

```cpp
typedef QFlags< RenderHint > QskGraphic::RenderHints;
```


### typedef CommandTypes

```cpp
typedef QFlags< CommandType > QskGraphic::CommandTypes;
```


## Public Functions Documentation

### function QskGraphic

```cpp
QskGraphic()
```


### function QskGraphic

```cpp
QskGraphic(
    const QskGraphic & other
)
```


### function QskGraphic

```cpp
QskGraphic(
    QskGraphic && other
)
```


### function ~QskGraphic

```cpp
~QskGraphic() override
```


### function operator=

```cpp
QskGraphic & operator=(
    const QskGraphic & other
)
```


### function operator=

```cpp
QskGraphic & operator=(
    QskGraphic && other
)
```


### function operator==

```cpp
bool operator==(
    const QskGraphic & other
) const
```


### function operator!=

```cpp
inline bool operator!=(
    const QskGraphic & other
) const
```


### function reset

```cpp
void reset()
```


### function isNull

```cpp
bool isNull() const
```


### function isEmpty

```cpp
bool isEmpty() const
```


### function commandTypes

```cpp
CommandTypes commandTypes() const
```


### function render

```cpp
void render(
    QPainter * painter
) const
```


### function render

```cpp
void render(
    QPainter * painter,
    const QskColorFilter & colorFilter,
    QTransform * initialTransform =nullptr
) const
```


### function render

```cpp
void render(
    QPainter * painter,
    const QSizeF & size,
    Qt::AspectRatioMode aspectRatioMode =Qt::IgnoreAspectRatio
) const
```


### function render

```cpp
void render(
    QPainter * painter,
    const QPointF & pos,
    Qt::Alignment alignment =Qt::AlignTop|Qt::AlignLeft
) const
```


### function render

```cpp
void render(
    QPainter * painter,
    const QRectF & rect,
    Qt::AspectRatioMode aspectRatioMode =Qt::IgnoreAspectRatio
) const
```


### function render

```cpp
void render(
    QPainter * painter,
    const QRectF & rect,
    const QskColorFilter & colorFilter,
    Qt::AspectRatioMode aspectRatioMode =Qt::IgnoreAspectRatio
) const
```


### function toPixmap

```cpp
QPixmap toPixmap(
    qreal devicePixelRatio =0.0
) const
```


### function toPixmap

```cpp
QPixmap toPixmap(
    const QSize & size,
    Qt::AspectRatioMode aspectRatioMode =Qt::IgnoreAspectRatio,
    qreal devicePixelRatio =0.0
) const
```


### function toImage

```cpp
QImage toImage(
    qreal devicePixelRatio =0.0
) const
```


### function toImage

```cpp
QImage toImage(
    const QSize & size,
    Qt::AspectRatioMode aspectRatioMode =Qt::IgnoreAspectRatio,
    qreal devicePixelRatio =0.0
) const
```


### function scaledBoundingRect

```cpp
QRectF scaledBoundingRect(
    qreal sx,
    qreal sy
) const
```


### function boundingRect

```cpp
QRectF boundingRect() const
```


### function controlPointRect

```cpp
QRectF controlPointRect() const
```


### function commands

```cpp
const QVector< QskPainterCommand > & commands() const
```


### function setCommands

```cpp
void setCommands(
    const QVector< QskPainterCommand > & commands
)
```


### function setDefaultSize

```cpp
void setDefaultSize(
    const QSizeF & size
)
```


### function defaultSize

```cpp
QSizeF defaultSize() const
```


### function heightForWidth

```cpp
qreal heightForWidth(
    qreal width
) const
```


### function widthForHeight

```cpp
qreal widthForHeight(
    qreal height
) const
```


### function setRenderHint

```cpp
void setRenderHint(
    RenderHint hint,
    bool on =true
)
```


### function testRenderHint

```cpp
bool testRenderHint(
    RenderHint hint
) const
```


### function renderHints

```cpp
RenderHints renderHints() const
```


### function paintEngine

```cpp
QPaintEngine * paintEngine() const override
```


### function metric

```cpp
int metric(
    PaintDeviceMetric metric
) const override
```


### function fromImage

```cpp
static QskGraphic fromImage(
    const QImage & image
)
```


### function fromPixmap

```cpp
static QskGraphic fromPixmap(
    const QPixmap & pixmap
)
```


## Protected Functions Documentation

### function sizeMetrics

```cpp
virtual QSize sizeMetrics() const
```


### function drawPath

```cpp
virtual void drawPath(
    const QPainterPath & path
)
```


### function drawPixmap

```cpp
virtual void drawPixmap(
    const QRectF & rect,
    const QPixmap & pixmap,
    const QRectF & subRect
)
```


### function drawImage

```cpp
virtual void drawImage(
    const QRectF & rect,
    const QImage & image,
    const QRectF & subRect,
    Qt::ImageConversionFlags flags
)
```


### function updateState

```cpp
virtual void updateState(
    const QPaintEngineState & state
)
```


## Friends

### friend QskGraphicPaintEngine

```cpp
friend class QskGraphicPaintEngine;
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET