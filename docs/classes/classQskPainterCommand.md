---
title: QskPainterCommand
layout: docs

---


**Module:** **[Graphic](/docs/modules/group__Graphic/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Type](/docs/classes/classQskPainterCommand/#enum-type)** { Invalid = -1, Path, Pixmap, Image, State}<br>Type of the paint command.  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[QskPainterCommand](/docs/classes/classQskPainterCommand/#function-qskpaintercommand)**() |
| | **[QskPainterCommand](/docs/classes/classQskPainterCommand/#function-qskpaintercommand)**(const QskPainterCommand & other) |
| | **[QskPainterCommand](/docs/classes/classQskPainterCommand/#function-qskpaintercommand)**(const QPainterPath & path) |
| | **[QskPainterCommand](/docs/classes/classQskPainterCommand/#function-qskpaintercommand)**(const QRectF & rect, const QPixmap & pixmap, const QRectF & subRect) |
| | **[QskPainterCommand](/docs/classes/classQskPainterCommand/#function-qskpaintercommand)**(const QRectF & rect, const QImage & image, const QRectF & subRect, Qt::ImageConversionFlags flags) |
| | **[QskPainterCommand](/docs/classes/classQskPainterCommand/#function-qskpaintercommand)**(const QskPainterCommand::StateData & data) |
| | **[QskPainterCommand](/docs/classes/classQskPainterCommand/#function-qskpaintercommand)**(const QPaintEngineState & state) |
| | **[~QskPainterCommand](/docs/classes/classQskPainterCommand/#function-~qskpaintercommand)**() |
| QskPainterCommand & | **[operator=](/docs/classes/classQskPainterCommand/#function-operator=)**(const QskPainterCommand & other) |
| bool | **[operator==](/docs/classes/classQskPainterCommand/#function-operator==)**(const QskPainterCommand & other) const |
| bool | **[operator!=](/docs/classes/classQskPainterCommand/#function-operator!=)**(const QskPainterCommand & other) const |
| Type | **[type](/docs/classes/classQskPainterCommand/#function-type)**() const |
| QPainterPath * | **[path](/docs/classes/classQskPainterCommand/#function-path)**() |
| const QPainterPath * | **[path](/docs/classes/classQskPainterCommand/#function-path)**() const |
| PixmapData * | **[pixmapData](/docs/classes/classQskPainterCommand/#function-pixmapdata)**() |
| const PixmapData * | **[pixmapData](/docs/classes/classQskPainterCommand/#function-pixmapdata)**() const |
| ImageData * | **[imageData](/docs/classes/classQskPainterCommand/#function-imagedata)**() |
| const ImageData * | **[imageData](/docs/classes/classQskPainterCommand/#function-imagedata)**() const |
| StateData * | **[stateData](/docs/classes/classQskPainterCommand/#function-statedata)**() |
| const StateData * | **[stateData](/docs/classes/classQskPainterCommand/#function-statedata)**() const |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| QPainterPath * | **[m_path](/docs/classes/classQskPainterCommand/#variable-m_path)**  |
| PixmapData * | **[m_pixmapData](/docs/classes/classQskPainterCommand/#variable-m_pixmapdata)**  |
| ImageData * | **[m_imageData](/docs/classes/classQskPainterCommand/#variable-m_imagedata)**  |
| StateData * | **[m_stateData](/docs/classes/classQskPainterCommand/#variable-m_statedata)**  |

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
QPainterPath * path()
```


### function path

```cpp
inline const QPainterPath * path() const
```


**Return**: Painter path to be painted 

### function pixmapData

```cpp
PixmapData * pixmapData()
```


### function pixmapData

```cpp
inline const PixmapData * pixmapData() const
```


**Return**: Attributes how to paint a QPixmap 

### function imageData

```cpp
ImageData * imageData()
```


### function imageData

```cpp
inline const ImageData * imageData() const
```


**Return**: Attributes how to paint a QImage 

### function stateData

```cpp
StateData * stateData()
```


### function stateData

```cpp
inline const StateData * stateData() const
```


**Return**: Attributes of a state change 

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

Updated on  3 February 2021 at 15:05:46 CET