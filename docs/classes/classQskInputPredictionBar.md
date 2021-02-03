---
title: QskInputPredictionBar
layout: docs

---




Inherits from QskBox

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Panel](/docs/classes/classQskInputPredictionBar/#subcontrol-panel)**  |
| const QskAspect::Subcontrol | **[ButtonPanel](/docs/classes/classQskInputPredictionBar/#subcontrol-buttonpanel)**  |
| const QskAspect::Subcontrol | **[ButtonText](/docs/classes/classQskInputPredictionBar/#subcontrol-buttontext)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskInputPredictionBar](/docs/classes/classQskInputPredictionBar/#function-qskinputpredictionbar)**(QQuickItem * parent =nullptr) |
| | **[~QskInputPredictionBar](/docs/classes/classQskInputPredictionBar/#function-~qskinputpredictionbar)**() override |
| QskAspect::Subcontrol | **[effectiveSubcontrol](/docs/classes/classQskInputPredictionBar/#function-effectivesubcontrol)**(QskAspect::Subcontrol subControl) const override |
| QStringList | **[candidates](/docs/classes/classQskInputPredictionBar/#function-candidates)**() const |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[predictiveTextSelected](/docs/classes/classQskInputPredictionBar/#signal-predictivetextselected)**(int ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setPrediction](/docs/classes/classQskInputPredictionBar/#slot-setprediction)**(const QStringList & candidates) |

## Public Subcontrols Documentation

### subcontrol Panel




### subcontrol ButtonPanel




### subcontrol ButtonText




## Public Functions Documentation

### function QskInputPredictionBar

```cpp
QskInputPredictionBar(
    QQuickItem * parent =nullptr
)
```


### function ~QskInputPredictionBar

```cpp
~QskInputPredictionBar() override
```


### function effectiveSubcontrol

```cpp
QskAspect::Subcontrol effectiveSubcontrol(
    QskAspect::Subcontrol subControl
) const override
```


### function candidates

```cpp
QStringList candidates() const
```


## Public Signals Documentation

### signal predictiveTextSelected

```cpp
void predictiveTextSelected(
    int 
)
```


## Public Slots Documentation

### slot setPrediction

```cpp
void setPrediction(
    const QStringList & candidates
)
```


-------------------------------

Updated on  3 February 2021 at 15:05:41 CET