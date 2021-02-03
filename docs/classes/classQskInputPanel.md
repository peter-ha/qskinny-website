---
title: QskInputPanel
layout: docs

---




Inherits from [QskControl](/docs/classes/classQskControl/), [QskQuickItem](/docs/classes/classQskQuickItem/), QskSkinnable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskInputPanel](/docs/classes/classQskInputPanel/#function-qskinputpanel)**(QQuickItem * parent =nullptr) |
| | **[~QskInputPanel](/docs/classes/classQskInputPanel/#function-~qskinputpanel)**() override |
| void | **[attachInputItem](/docs/classes/classQskInputPanel/#function-attachinputitem)**(QQuickItem * item) |
| void | **[updateInputPanel](/docs/classes/classQskInputPanel/#function-updateinputpanel)**(Qt::InputMethodQueries queries) |
| virtual QQuickItem * | **[inputProxy](/docs/classes/classQskInputPanel/#function-inputproxy)**() const |
| QQuickItem * | **[inputItem](/docs/classes/classQskInputPanel/#function-inputitem)**() const |
| virtual Qt::Alignment | **[alignment](/docs/classes/classQskInputPanel/#function-alignment)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[attachItem](/docs/classes/classQskInputPanel/#function-attachitem)**(QQuickItem * ) =0 |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[keySelected](/docs/classes/classQskInputPanel/#signal-keyselected)**(int keyCode) |
| void | **[predictiveTextSelected](/docs/classes/classQskInputPanel/#signal-predictivetextselected)**(int ) |
| void | **[inputItemDestroyed](/docs/classes/classQskInputPanel/#signal-inputitemdestroyed)**() |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[commitKey](/docs/classes/classQskInputPanel/#slot-commitkey)**(int keyCode) |
| void | **[commitPredictiveText](/docs/classes/classQskInputPanel/#slot-commitpredictivetext)**(int index) |
| virtual void | **[setPrompt](/docs/classes/classQskInputPanel/#slot-setprompt)**(const QString & ) |
| virtual void | **[setPrediction](/docs/classes/classQskInputPanel/#slot-setprediction)**(const QStringList & ) |
| virtual void | **[setPredictionEnabled](/docs/classes/classQskInputPanel/#slot-setpredictionenabled)**(bool ) |

## Public Functions Documentation

### function QskInputPanel

```cpp
QskInputPanel(
    QQuickItem * parent =nullptr
)
```


### function ~QskInputPanel

```cpp
~QskInputPanel() override
```


### function attachInputItem

```cpp
void attachInputItem(
    QQuickItem * item
)
```


### function updateInputPanel

```cpp
void updateInputPanel(
    Qt::InputMethodQueries queries
)
```


### function inputProxy

```cpp
virtual QQuickItem * inputProxy() const
```


### function inputItem

```cpp
QQuickItem * inputItem() const
```


### function alignment

```cpp
virtual Qt::Alignment alignment() const
```


## Protected Functions Documentation

### function attachItem

```cpp
virtual void attachItem(
    QQuickItem * 
) =0
```


## Public Signals Documentation

### signal keySelected

```cpp
void keySelected(
    int keyCode
)
```


### signal predictiveTextSelected

```cpp
void predictiveTextSelected(
    int 
)
```


### signal inputItemDestroyed

```cpp
void inputItemDestroyed()
```


## Public Slots Documentation

### slot commitKey

```cpp
void commitKey(
    int keyCode
)
```


### slot commitPredictiveText

```cpp
void commitPredictiveText(
    int index
)
```


### slot setPrompt

```cpp
virtual void setPrompt(
    const QString & 
)
```


### slot setPrediction

```cpp
virtual void setPrediction(
    const QStringList & 
)
```


### slot setPredictionEnabled

```cpp
virtual void setPredictionEnabled(
    bool 
)
```


-------------------------------

Updated on  3 February 2021 at 15:05:41 CET