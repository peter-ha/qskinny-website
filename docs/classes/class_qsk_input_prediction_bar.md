---
title: QskInputPredictionBar
layout: docs

---




Inherits from QskBox

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setPrediction](/docs/classes/class_qsk_input_prediction_bar/#slot-setprediction)**(const QStringList & candidates) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[predictiveTextSelected](/docs/classes/class_qsk_input_prediction_bar/#signal-predictivetextselected)**(int ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskInputPredictionBar](/docs/classes/class_qsk_input_prediction_bar/#function-qskinputpredictionbar)**(QQuickItem * parent =nullptr) |
| | **[~QskInputPredictionBar](/docs/classes/class_qsk_input_prediction_bar/#function-~qskinputpredictionbar)**() override |
| QskAspect::Subcontrol | **[effectiveSubcontrol](/docs/classes/class_qsk_input_prediction_bar/#function-effectivesubcontrol)**(QskAspect::Subcontrol subControl) const override |
| QStringList | **[candidates](/docs/classes/class_qsk_input_prediction_bar/#function-candidates)**() const |

## Public Slots Documentation

### slot setPrediction

```cpp
void setPrediction(
    const QStringList & candidates
)
```


## Public Signals Documentation

### signal predictiveTextSelected

```cpp
void predictiveTextSelected(
    int 
)
```


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


-------------------------------

Updated on 26 January 2021 at 09:44:53 CET