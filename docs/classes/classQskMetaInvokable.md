---
title: QskMetaInvokable
layout: docs

---


**Module:** **[Core](/docs/modules/group__Core/)**



## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Type](/docs/classes/classQskMetaInvokable/#enum-type)** { Invalid = 0, MetaMethod, MetaProperty, MetaFunction} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskMetaInvokable](/docs/classes/classQskMetaInvokable/#function-qskmetainvokable)**() |
| | **[QskMetaInvokable](/docs/classes/classQskMetaInvokable/#function-qskmetainvokable)**(const QskMetaFunction & function) |
| | **[QskMetaInvokable](/docs/classes/classQskMetaInvokable/#function-qskmetainvokable)**(const QMetaMethod & method) |
| | **[QskMetaInvokable](/docs/classes/classQskMetaInvokable/#function-qskmetainvokable)**(const QObject * object, const char * methodName) |
| | **[QskMetaInvokable](/docs/classes/classQskMetaInvokable/#function-qskmetainvokable)**(const QMetaObject * metaObject, const char * methodName) |
| | **[QskMetaInvokable](/docs/classes/classQskMetaInvokable/#function-qskmetainvokable)**(const QMetaProperty & property) |
| | **[QskMetaInvokable](/docs/classes/classQskMetaInvokable/#function-qskmetainvokable)**(const QskMetaInvokable & other) |
| | **[~QskMetaInvokable](/docs/classes/classQskMetaInvokable/#function-~qskmetainvokable)**() |
| QskMetaInvokable & | **[operator=](/docs/classes/classQskMetaInvokable/#function-operator=)**(const QskMetaInvokable & other) |
| bool | **[operator==](/docs/classes/classQskMetaInvokable/#function-operator==)**(const QskMetaInvokable & other) const |
| bool | **[operator!=](/docs/classes/classQskMetaInvokable/#function-operator!=)**(const QskMetaInvokable & other) const |
| | **[operator bool](/docs/classes/classQskMetaInvokable/#function-operator-bool)**() const |
| Type | **[type](/docs/classes/classQskMetaInvokable/#function-type)**() const |
| bool | **[isNull](/docs/classes/classQskMetaInvokable/#function-isnull)**() const |
| int | **[parameterCount](/docs/classes/classQskMetaInvokable/#function-parametercount)**() const |
| int | **[parameterType](/docs/classes/classQskMetaInvokable/#function-parametertype)**(int index) const |
| int | **[returnType](/docs/classes/classQskMetaInvokable/#function-returntype)**() const |
| void | **[invoke](/docs/classes/classQskMetaInvokable/#function-invoke)**(QObject * object, void * args[], Qt::ConnectionType connectionType =Qt::AutoConnection) |
| void | **[reset](/docs/classes/classQskMetaInvokable/#function-reset)**() |
| QByteArray | **[name](/docs/classes/classQskMetaInvokable/#function-name)**() const |
| QMetaMethod | **[method](/docs/classes/classQskMetaInvokable/#function-method)**() const |
| QMetaProperty | **[property](/docs/classes/classQskMetaInvokable/#function-property)**() const |
| QskMetaFunction | **[function](/docs/classes/classQskMetaInvokable/#function-function)**() const |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| FunctionData | **[m_functionData](/docs/classes/classQskMetaInvokable/#variable-m_functiondata)**  |
| MetaData | **[m_metaData](/docs/classes/classQskMetaInvokable/#variable-m_metadata)**  |

## Public Types Documentation

### enum Type

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Invalid | 0|   |
| MetaMethod | |   |
| MetaProperty | |   |
| MetaFunction | |   |




## Public Functions Documentation

### function QskMetaInvokable

```cpp
inline QskMetaInvokable()
```


### function QskMetaInvokable

```cpp
QskMetaInvokable(
    const QskMetaFunction & function
)
```


### function QskMetaInvokable

```cpp
QskMetaInvokable(
    const QMetaMethod & method
)
```


### function QskMetaInvokable

```cpp
QskMetaInvokable(
    const QObject * object,
    const char * methodName
)
```


### function QskMetaInvokable

```cpp
QskMetaInvokable(
    const QMetaObject * metaObject,
    const char * methodName
)
```


### function QskMetaInvokable

```cpp
QskMetaInvokable(
    const QMetaProperty & property
)
```


### function QskMetaInvokable

```cpp
QskMetaInvokable(
    const QskMetaInvokable & other
)
```


### function ~QskMetaInvokable

```cpp
~QskMetaInvokable()
```


### function operator=

```cpp
QskMetaInvokable & operator=(
    const QskMetaInvokable & other
)
```


### function operator==

```cpp
bool operator==(
    const QskMetaInvokable & other
) const
```


### function operator!=

```cpp
inline bool operator!=(
    const QskMetaInvokable & other
) const
```


### function operator bool

```cpp
inline explicit operator bool() const
```


### function type

```cpp
inline Type type() const
```


### function isNull

```cpp
bool isNull() const
```


### function parameterCount

```cpp
int parameterCount() const
```


### function parameterType

```cpp
int parameterType(
    int index
) const
```


### function returnType

```cpp
int returnType() const
```


### function invoke

```cpp
void invoke(
    QObject * object,
    void * args[],
    Qt::ConnectionType connectionType =Qt::AutoConnection
)
```


### function reset

```cpp
void reset()
```


### function name

```cpp
QByteArray name() const
```


### function method

```cpp
QMetaMethod method() const
```


### function property

```cpp
QMetaProperty property() const
```


### function function

```cpp
QskMetaFunction function() const
```


## Public Attributes Documentation

### variable m_functionData

```cpp
FunctionData m_functionData;
```


### variable m_metaData

```cpp
MetaData m_metaData;
```


-------------------------------

Updated on  3 February 2021 at 15:05:46 CET