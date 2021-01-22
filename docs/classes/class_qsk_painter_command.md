---
title: QskPainterCommand
layout: docs

---


**Module:** **[Graphic](/docs/modules/group___graphic/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Type](/docs/classes/class_qsk_painter_command/#enum-type)** { Invalid = -1, Path, Pixmap, Image, State}<br>Type of the paint command.  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[QskPainterCommand](/docs/classes/class_qsk_painter_command/#function-qskpaintercommand)**() |
| | **[QskPainterCommand](/docs/classes/class_qsk_painter_command/#function-qskpaintercommand)**(const QskPainterCommand & other) |
| | **[QskPainterCommand](/docs/classes/class_qsk_painter_command/#function-qskpaintercommand)**(const QPainterPath & path) |
| | **[QskPainterCommand](/docs/classes/class_qsk_painter_command/#function-qskpaintercommand)**(const QRectF & rect, const QPixmap & pixmap, const QRectF & subRect) |
| | **[QskPainterCommand](/docs/classes/class_qsk_painter_command/#function-qskpaintercommand)**(const QRectF & rect, const QImage & image, const QRectF & subRect, Qt::ImageConversionFlags flags) |
| | **[QskPainterCommand](/docs/classes/class_qsk_painter_command/#function-qskpaintercommand)**(const QskPainterCommand::StateData & data) |
| | **[QskPainterCommand](/docs/classes/class_qsk_painter_command/#function-qskpaintercommand)**(const QPaintEngineState & state) |
| | **[~QskPainterCommand](/docs/classes/class_qsk_painter_command/#function-~qskpaintercommand)**() |
| QskPainterCommand & | **[operator=](/docs/classes/class_qsk_painter_command/#function-operator=)**(const QskPainterCommand & other) |
| bool | **[operator==](/docs/classes/class_qsk_painter_command/#function-operator==)**(const QskPainterCommand & other) const |
| bool | **[operator!=](/docs/classes/class_qsk_painter_command/#function-operator!=)**(const QskPainterCommand & other) const |
| Type | **[type](/docs/classes/class_qsk_painter_command/#function-type)**() const |
| QPainterPath * | **[path](/docs/classes/class_qsk_painter_command/#function-path)**() |
| const QPainterPath * | **[path](/docs/classes/class_qsk_painter_command/#function-path)**() const |
| PixmapData * | **[pixmapData](/docs/classes/class_qsk_painter_command/#function-pixmapdata)**() |
| const PixmapData * | **[pixmapData](/docs/classes/class_qsk_painter_command/#function-pixmapdata)**() const |
| ImageData * | **[imageData](/docs/classes/class_qsk_painter_command/#function-imagedata)**() |
| const ImageData * | **[imageData](/docs/classes/class_qsk_painter_command/#function-imagedata)**() const |
| StateData * | **[stateData](/docs/classes/class_qsk_painter_command/#function-statedata)**() |
| const StateData * | **[stateData](/docs/classes/class_qsk_painter_command/#function-statedata)**() const |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| QPainterPath * | **[m_path](/docs/classes/class_qsk_painter_command/#variable-m_path)**  |
| PixmapData * | **[m_pixmapData](/docs/classes/class_qsk_painter_command/#variable-m_pixmapdata)**  |
| ImageData * | **[m_imageData](/docs/classes/class_qsk_painter_command/#variable-m_imagedata)**  |
| StateData * | **[m_stateData](/docs/classes/class_qsk_painter_command/#variable-m_statedata)**  |

## Public Types Documentation

### enum Type

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Invalid | -1| Invalid command.   |
| Path | | Draw a QPainterPath.   |
| Pixmap | | Draw a QPixmap.   |
| Image | | Draw a QImage.   |
| State | | QPainter state change.   |



Type of the paint command. 

## Public Functions Documentation

### function QskPainterCommand

```cpp
inline constexpr QskPainterCommand()
```


### function QskPainterCommand

```cpp
QskPainterCommand(
    const QskPainterCommand & other
)
```


### function QskPainterCommand

```cpp
explicit QskPainterCommand(
    const QPainterPath & path
)
```


### function QskPainterCommand

```cpp
QskPainterCommand(
    const QRectF & rect,
    const QPixmap & pixmap,
    const QRectF & subRect
)
```


### function QskPainterCommand

```cpp
QskPainterCommand(
    const QRectF & rect,
    const QImage & image,
    const QRectF & subRect,
    Qt::ImageConversionFlags flags
)
```


### function QskPainterCommand

```cpp
explicit QskPainterCommand(
    const QskPainterCommand::StateData & data
)
```


### function QskPainterCommand

```cpp
explicit QskPainterCommand(
    const QPaintEngineState & state
)
```


### function ~QskPainterCommand

```cpp
~QskPainterCommand()
```


### function operator=

```cpp
QskPainterCommand & operator=(
    const QskPainterCommand & other
)
```


### function operator==

```cpp
bool operator==(
    const QskPainterCommand & other
) const
```


### function operator!=

```cpp
inline bool operator!=(
    const QskPainterCommand & other
) const
```


### function type

```cpp
inline Type type() const
```


**Return**: Type of the command 

### function path

```cpp
inline QPainterPath * path()
```


**Return**: Painter path to be painted 

### function path

```cpp
const QPainterPath * path() const
```


### function pixmapData

```cpp
inline PixmapData * pixmapData()
```


**Return**: Attributes how to paint a QPixmap 

### function pixmapData

```cpp
const PixmapData * pixmapData() const
```


### function imageData

```cpp
inline ImageData * imageData()
```


**Return**: Attributes how to paint a QImage 

### function imageData

```cpp
const ImageData * imageData() const
```


### function stateData

```cpp
inline StateData * stateData()
```


**Return**: Attributes of a state change 

### function stateData

```cpp
const StateData * stateData() const
```


## Public Attributes Documentation

### variable m_path

```cpp
QPainterPath * m_path;
```


### variable m_pixmapData

```cpp
PixmapData * m_pixmapData;
```


### variable m_imageData

```cpp
ImageData * m_imageData;
```


### variable m_stateData

```cpp
StateData * m_stateData;
```


-------------------------------

Updated on 22 January 2021 at 17:05:50 CET