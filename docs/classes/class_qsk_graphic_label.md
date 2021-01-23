---
title: QskGraphicLabel
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from [QskControl](/docs/classes/class_qsk_control/), [QskQuickItem](/docs/classes/class_qsk_quick_item/), [QskSkinnable](/docs/classes/class_qsk_skinnable/), QQuickItem

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[FillMode](/docs/classes/class_qsk_graphic_label/#enum-fillmode)** { Stretch, PreserveAspectFit, PreserveAspectCrop, Pad} |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setGraphic](/docs/classes/class_qsk_graphic_label/#slot-setgraphic)**(const [QskGraphic](/docs/classes/class_qsk_graphic/) & graphic) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[sourceChanged](/docs/classes/class_qsk_graphic_label/#signal-sourcechanged)**() |
| void | **[mirrorChanged](/docs/classes/class_qsk_graphic_label/#signal-mirrorchanged)**() |
| void | **[sourceSizeChanged](/docs/classes/class_qsk_graphic_label/#signal-sourcesizechanged)**() |
| void | **[graphicRoleChanged](/docs/classes/class_qsk_graphic_label/#signal-graphicrolechanged)**(int ) |
| void | **[alignmentChanged](/docs/classes/class_qsk_graphic_label/#signal-alignmentchanged)**(Qt::Alignment ) |
| void | **[fillModeChanged](/docs/classes/class_qsk_graphic_label/#signal-fillmodechanged)**(FillMode ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGraphicLabel](/docs/classes/class_qsk_graphic_label/#function-qskgraphiclabel)**(QQuickItem * parent =nullptr) |
| | **[QskGraphicLabel](/docs/classes/class_qsk_graphic_label/#function-qskgraphiclabel)**(const QUrl & url, QQuickItem * parent =nullptr) |
| | **[QskGraphicLabel](/docs/classes/class_qsk_graphic_label/#function-qskgraphiclabel)**(const QString & url, QQuickItem * parent =nullptr) |
| | **[QskGraphicLabel](/docs/classes/class_qsk_graphic_label/#function-qskgraphiclabel)**(const [QskGraphic](/docs/classes/class_qsk_graphic/) & graphic, QQuickItem * parent =nullptr) |
| | **[~QskGraphicLabel](/docs/classes/class_qsk_graphic_label/#function-~qskgraphiclabel)**() override |
| [QskGraphic](/docs/classes/class_qsk_graphic/) | **[graphic](/docs/classes/class_qsk_graphic_label/#function-graphic)**() const |
| virtual QskColorFilter | **[graphicFilter](/docs/classes/class_qsk_graphic_label/#function-graphicfilter)**() const |
| QUrl | **[source](/docs/classes/class_qsk_graphic_label/#function-source)**() const |
| void | **[setSource](/docs/classes/class_qsk_graphic_label/#function-setsource)**(const QString & source) |
| void | **[setSource](/docs/classes/class_qsk_graphic_label/#function-setsource)**(const QUrl & url) |
| void | **[setSourceSize](/docs/classes/class_qsk_graphic_label/#function-setsourcesize)**(const QSize & size) |
| void | **[resetSourceSize](/docs/classes/class_qsk_graphic_label/#function-resetsourcesize)**() |
| QSize | **[sourceSize](/docs/classes/class_qsk_graphic_label/#function-sourcesize)**() const |
| QSizeF | **[effectiveSourceSize](/docs/classes/class_qsk_graphic_label/#function-effectivesourcesize)**() const |
| void | **[setMirror](/docs/classes/class_qsk_graphic_label/#function-setmirror)**(bool on) |
| bool | **[mirror](/docs/classes/class_qsk_graphic_label/#function-mirror)**() const |
| void | **[setAlignment](/docs/classes/class_qsk_graphic_label/#function-setalignment)**(Qt::Alignment alignment) |
| void | **[resetAlignment](/docs/classes/class_qsk_graphic_label/#function-resetalignment)**() |
| Qt::Alignment | **[alignment](/docs/classes/class_qsk_graphic_label/#function-alignment)**() const |
| void | **[setFillMode](/docs/classes/class_qsk_graphic_label/#function-setfillmode)**(FillMode mode) |
| FillMode | **[fillMode](/docs/classes/class_qsk_graphic_label/#function-fillmode)**() const |
| bool | **[isEmpty](/docs/classes/class_qsk_graphic_label/#function-isempty)**() const |
| void | **[setGraphicRole](/docs/classes/class_qsk_graphic_label/#function-setgraphicrole)**(int role) |
| void | **[resetGraphicRole](/docs/classes/class_qsk_graphic_label/#function-resetgraphicrole)**() |
| int | **[graphicRole](/docs/classes/class_qsk_graphic_label/#function-graphicrole)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[changeEvent](/docs/classes/class_qsk_graphic_label/#function-changeevent)**(QEvent * event) override |
| void | **[updateResources](/docs/classes/class_qsk_graphic_label/#function-updateresources)**() override |
| virtual [QskGraphic](/docs/classes/class_qsk_graphic/) | **[loadSource](/docs/classes/class_qsk_graphic_label/#function-loadsource)**(const QUrl & url) const |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QUrl | **[source](/docs/classes/class_qsk_graphic_label/#property-source)**  |
| bool | **[mirror](/docs/classes/class_qsk_graphic_label/#property-mirror)**  |
| QSize | **[sourceSize](/docs/classes/class_qsk_graphic_label/#property-sourcesize)**  |
| int | **[graphicRole](/docs/classes/class_qsk_graphic_label/#property-graphicrole)**  |
| Qt::Alignment | **[alignment](/docs/classes/class_qsk_graphic_label/#property-alignment)**  |
| FillMode | **[fillMode](/docs/classes/class_qsk_graphic_label/#property-fillmode)**  |

## Public Types Documentation

### enum FillMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Stretch | |   |
| PreserveAspectFit | |   |
| PreserveAspectCrop | |   |
| Pad | |   |




## Public Slots Documentation

### slot setGraphic

```cpp
void setGraphic(
    const QskGraphic & graphic
)
```


## Public Signals Documentation

### signal sourceChanged

```cpp
void sourceChanged()
```


### signal mirrorChanged

```cpp
void mirrorChanged()
```


### signal sourceSizeChanged

```cpp
void sourceSizeChanged()
```


### signal graphicRoleChanged

```cpp
void graphicRoleChanged(
    int 
)
```


### signal alignmentChanged

```cpp
void alignmentChanged(
    Qt::Alignment 
)
```


### signal fillModeChanged

```cpp
void fillModeChanged(
    FillMode 
)
```


## Public Functions Documentation

### function QskGraphicLabel

```cpp
QskGraphicLabel(
    QQuickItem * parent =nullptr
)
```


### function QskGraphicLabel

```cpp
QskGraphicLabel(
    const QUrl & url,
    QQuickItem * parent =nullptr
)
```


### function QskGraphicLabel

```cpp
QskGraphicLabel(
    const QString & url,
    QQuickItem * parent =nullptr
)
```


### function QskGraphicLabel

```cpp
QskGraphicLabel(
    const QskGraphic & graphic,
    QQuickItem * parent =nullptr
)
```


### function ~QskGraphicLabel

```cpp
~QskGraphicLabel() override
```


### function graphic

```cpp
QskGraphic graphic() const
```


### function graphicFilter

```cpp
virtual QskColorFilter graphicFilter() const
```


### function source

```cpp
QUrl source() const
```


### function setSource

```cpp
void setSource(
    const QString & source
)
```


### function setSource

```cpp
void setSource(
    const QUrl & url
)
```


### function setSourceSize

```cpp
void setSourceSize(
    const QSize & size
)
```


### function resetSourceSize

```cpp
void resetSourceSize()
```


### function sourceSize

```cpp
QSize sourceSize() const
```


### function effectiveSourceSize

```cpp
QSizeF effectiveSourceSize() const
```


### function setMirror

```cpp
void setMirror(
    bool on
)
```


### function mirror

```cpp
bool mirror() const
```


### function setAlignment

```cpp
void setAlignment(
    Qt::Alignment alignment
)
```


### function resetAlignment

```cpp
void resetAlignment()
```


### function alignment

```cpp
Qt::Alignment alignment() const
```


### function setFillMode

```cpp
void setFillMode(
    FillMode mode
)
```


### function fillMode

```cpp
FillMode fillMode() const
```


### function isEmpty

```cpp
bool isEmpty() const
```


### function setGraphicRole

```cpp
void setGraphicRole(
    int role
)
```


### function resetGraphicRole

```cpp
void resetGraphicRole()
```


### function graphicRole

```cpp
int graphicRole() const
```


## Protected Functions Documentation

### function changeEvent

```cpp
void changeEvent(
    QEvent * event
) override
```


### function updateResources

```cpp
void updateResources() override
```


### function loadSource

```cpp
virtual QskGraphic loadSource(
    const QUrl & url
) const
```


## Public Property Documentation

### property source

```cpp
QUrl source;
```


### property mirror

```cpp
bool mirror;
```


### property sourceSize

```cpp
QSize sourceSize;
```


### property graphicRole

```cpp
int graphicRole;
```


### property alignment

```cpp
Qt::Alignment alignment;
```


### property fillMode

```cpp
FillMode fillMode;
```


-------------------------------

Updated on 23 January 2021 at 09:50:34 CET