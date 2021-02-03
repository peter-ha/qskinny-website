---
title: QskTextPredictor
layout: docs

---




Inherits from QObject

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Attribute](/docs/classes/classQskTextPredictor/#enum-attribute)** { Words = 1 << 0} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[~QskTextPredictor](/docs/classes/classQskTextPredictor/#function-~qsktextpredictor)**() override |
| virtual void | **[request](/docs/classes/classQskTextPredictor/#function-request)**(const QString & text) =0 |
| virtual void | **[reset](/docs/classes/classQskTextPredictor/#function-reset)**() =0 |
| virtual int | **[candidateCount](/docs/classes/classQskTextPredictor/#function-candidatecount)**() const =0 |
| virtual QString | **[candidate](/docs/classes/classQskTextPredictor/#function-candidate)**(int ) const =0 |
| virtual QStringList | **[candidates](/docs/classes/classQskTextPredictor/#function-candidates)**() const |
| Attributes | **[attributes](/docs/classes/classQskTextPredictor/#function-attributes)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskTextPredictor](/docs/classes/classQskTextPredictor/#function-qsktextpredictor)**(Attributes attributes, QObject * parent) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[predictionChanged](/docs/classes/classQskTextPredictor/#signal-predictionchanged)**() |

## Public Types Documentation

### enum Attribute

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Words | 1 << 0|   |




## Public Functions Documentation

### function ~QskTextPredictor

```cpp
~QskTextPredictor() override
```


### function request

```cpp
virtual void request(
    const QString & text
) =0
```


### function reset

```cpp
virtual void reset() =0
```


### function candidateCount

```cpp
virtual int candidateCount() const =0
```


### function candidate

```cpp
virtual QString candidate(
    int 
) const =0
```


### function candidates

```cpp
virtual QStringList candidates() const
```


### function attributes

```cpp
Attributes attributes() const
```


## Protected Functions Documentation

### function QskTextPredictor

```cpp
QskTextPredictor(
    Attributes attributes,
    QObject * parent
)
```


## Public Signals Documentation

### signal predictionChanged

```cpp
void predictionChanged()
```


-------------------------------

Updated on  3 February 2021 at 15:05:39 CET