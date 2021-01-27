---
title: QskPushButton
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from QskAbstractButton

Inherited by [QskDialogButton](/docs/classes/class_qsk_dialog_button/)

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setText](/docs/classes/class_qsk_push_button/#slot-settext)**(const QString & text) |
| void | **[setGraphicSource](/docs/classes/class_qsk_push_button/#slot-setgraphicsource)**(const QUrl & url) |
| void | **[setGraphicSource](/docs/classes/class_qsk_push_button/#slot-setgraphicsource)**(const QString & source) |
| void | **[setGraphic](/docs/classes/class_qsk_push_button/#slot-setgraphic)**(const [QskGraphic](/docs/classes/class_qsk_graphic/) & graphic) |
| void | **[setGraphicSourceSize](/docs/classes/class_qsk_push_button/#slot-setgraphicsourcesize)**(const QSizeF & size) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[cornerChanged](/docs/classes/class_qsk_push_button/#signal-cornerchanged)**() |
| void | **[borderWidthChanged](/docs/classes/class_qsk_push_button/#signal-borderwidthchanged)**() |
| void | **[textChanged](/docs/classes/class_qsk_push_button/#signal-textchanged)**() |
| void | **[textOptionsChanged](/docs/classes/class_qsk_push_button/#signal-textoptionschanged)**() |
| void | **[flatChanged](/docs/classes/class_qsk_push_button/#signal-flatchanged)**() |
| void | **[graphicChanged](/docs/classes/class_qsk_push_button/#signal-graphicchanged)**() |
| void | **[graphicSourceChanged](/docs/classes/class_qsk_push_button/#signal-graphicsourcechanged)**() |
| void | **[graphicSourceSizeChanged](/docs/classes/class_qsk_push_button/#signal-graphicsourcesizechanged)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskPushButton](/docs/classes/class_qsk_push_button/#function-qskpushbutton)**(QQuickItem * parent =nullptr) |
| | **[QskPushButton](/docs/classes/class_qsk_push_button/#function-qskpushbutton)**(const QString & text, QQuickItem * parent =nullptr) |
| | **[~QskPushButton](/docs/classes/class_qsk_push_button/#function-~qskpushbutton)**() override |
| void | **[setCorner](/docs/classes/class_qsk_push_button/#function-setcorner)**(const QskCorner & corner) |
| QskCorner | **[corner](/docs/classes/class_qsk_push_button/#function-corner)**() const |
| QString | **[text](/docs/classes/class_qsk_push_button/#function-text)**() const |
| void | **[setTextOptions](/docs/classes/class_qsk_push_button/#function-settextoptions)**(const QskTextOptions & options) |
| QskTextOptions | **[textOptions](/docs/classes/class_qsk_push_button/#function-textoptions)**() const |
| QUrl | **[graphicSource](/docs/classes/class_qsk_push_button/#function-graphicsource)**() const |
| QSizeF | **[graphicSourceSize](/docs/classes/class_qsk_push_button/#function-graphicsourcesize)**() const |
| [QskGraphic](/docs/classes/class_qsk_graphic/) | **[graphic](/docs/classes/class_qsk_push_button/#function-graphic)**() const |
| bool | **[hasGraphic](/docs/classes/class_qsk_push_button/#function-hasgraphic)**() const |
| void | **[resetGraphicSourceSize](/docs/classes/class_qsk_push_button/#function-resetgraphicsourcesize)**() |
| void | **[setFlat](/docs/classes/class_qsk_push_button/#function-setflat)**(bool on) |
| bool | **[isFlat](/docs/classes/class_qsk_push_button/#function-isflat)**() const |
| QFont | **[font](/docs/classes/class_qsk_push_button/#function-font)**() const |
| QRectF | **[layoutRectForSize](/docs/classes/class_qsk_push_button/#function-layoutrectforsize)**(const QSizeF & size) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[changeEvent](/docs/classes/class_qsk_push_button/#function-changeevent)**(QEvent * event) override |
| void | **[updateResources](/docs/classes/class_qsk_push_button/#function-updateresources)**() override |
| virtual [QskGraphic](/docs/classes/class_qsk_graphic/) | **[loadGraphic](/docs/classes/class_qsk_push_button/#function-loadgraphic)**(const QUrl & url) const |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QString | **[text](/docs/classes/class_qsk_push_button/#property-text)**  |
| QFont | **[font](/docs/classes/class_qsk_push_button/#property-font)**  |
| QskTextOptions | **[textOptions](/docs/classes/class_qsk_push_button/#property-textoptions)**  |
| QUrl | **[graphicSource](/docs/classes/class_qsk_push_button/#property-graphicsource)**  |
| [QskGraphic](/docs/classes/class_qsk_graphic/) | **[graphic](/docs/classes/class_qsk_push_button/#property-graphic)**  |
| QSizeF | **[graphicSourceSize](/docs/classes/class_qsk_push_button/#property-graphicsourcesize)**  |
| bool | **[flat](/docs/classes/class_qsk_push_button/#property-flat)**  |
| QskCorner | **[corner](/docs/classes/class_qsk_push_button/#property-corner)**  |

## Public Slots Documentation

### slot setText

```cpp
void setText(
    const QString & text
)
```


### slot setGraphicSource

```cpp
void setGraphicSource(
    const QUrl & url
)
```


### slot setGraphicSource

```cpp
void setGraphicSource(
    const QString & source
)
```


### slot setGraphic

```cpp
void setGraphic(
    const QskGraphic & graphic
)
```


### slot setGraphicSourceSize

```cpp
void setGraphicSourceSize(
    const QSizeF & size
)
```


## Public Signals Documentation

### signal cornerChanged

```cpp
void cornerChanged()
```


### signal borderWidthChanged

```cpp
void borderWidthChanged()
```


### signal textChanged

```cpp
void textChanged()
```


### signal textOptionsChanged

```cpp
void textOptionsChanged()
```


### signal flatChanged

```cpp
void flatChanged()
```


### signal graphicChanged

```cpp
void graphicChanged()
```


### signal graphicSourceChanged

```cpp
void graphicSourceChanged()
```


### signal graphicSourceSizeChanged

```cpp
void graphicSourceSizeChanged()
```


## Public Functions Documentation

### function QskPushButton

```cpp
QskPushButton(
    QQuickItem * parent =nullptr
)
```


### function QskPushButton

```cpp
QskPushButton(
    const QString & text,
    QQuickItem * parent =nullptr
)
```


### function ~QskPushButton

```cpp
~QskPushButton() override
```


### function setCorner

```cpp
void setCorner(
    const QskCorner & corner
)
```


### function corner

```cpp
QskCorner corner() const
```


### function text

```cpp
QString text() const
```


### function setTextOptions

```cpp
void setTextOptions(
    const QskTextOptions & options
)
```


### function textOptions

```cpp
QskTextOptions textOptions() const
```


### function graphicSource

```cpp
QUrl graphicSource() const
```


### function graphicSourceSize

```cpp
QSizeF graphicSourceSize() const
```


### function graphic

```cpp
QskGraphic graphic() const
```


### function hasGraphic

```cpp
bool hasGraphic() const
```


### function resetGraphicSourceSize

```cpp
void resetGraphicSourceSize()
```


### function setFlat

```cpp
void setFlat(
    bool on
)
```


### function isFlat

```cpp
bool isFlat() const
```


### function font

```cpp
QFont font() const
```


### function layoutRectForSize

```cpp
QRectF layoutRectForSize(
    const QSizeF & size
) const override
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


### function loadGraphic

```cpp
virtual QskGraphic loadGraphic(
    const QUrl & url
) const
```


## Public Property Documentation

### property text

```cpp
QString text;
```


### property font

```cpp
QFont font;
```


### property textOptions

```cpp
QskTextOptions textOptions;
```


### property graphicSource

```cpp
QUrl graphicSource;
```


### property graphic

```cpp
QskGraphic graphic;
```


### property graphicSourceSize

```cpp
QSizeF graphicSourceSize;
```


### property flat

```cpp
bool flat;
```


### property corner

```cpp
QskCorner corner;
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET