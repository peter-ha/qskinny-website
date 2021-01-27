---
title: QskMetaFunction::FunctionCall
layout: docs

---




Inherits from QSlotObjectBase

Inherited by [QskMetaFunctionCall::FunctorFunctionCall< Function, N, Args, R >](/docs/classes/class_qsk_meta_function_call_1_1_functor_function_call/), [QskMetaFunctionCall::MemberFunctionCall< Function, Args, R >](/docs/classes/class_qsk_meta_function_call_1_1_member_function_call/), [QskMetaFunctionCall::StaticFunctionCall< Function, Args, R >](/docs/classes/class_qsk_meta_function_call_1_1_static_function_call/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[@3](/docs/classes/class_qsk_meta_function_1_1_function_call/#enum-@3)** { TypeInfo = NumOperations + 1} |
| typedef void(*)(int which, QtPrivate::QSlotObjectBase *, QObject *, void **, bool *) | **[InvokeFunction](/docs/classes/class_qsk_meta_function_1_1_function_call/#typedef-invokefunction)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[typeInfo](/docs/classes/class_qsk_meta_function_1_1_function_call/#function-typeinfo)**() const |
| int | **[refCount](/docs/classes/class_qsk_meta_function_1_1_function_call/#function-refcount)**() const |
| const int * | **[parameterTypes](/docs/classes/class_qsk_meta_function_1_1_function_call/#function-parametertypes)**() const |
| void | **[setParameterTypes](/docs/classes/class_qsk_meta_function_1_1_function_call/#function-setparametertypes)**(const int * types) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[FunctionCall](/docs/classes/class_qsk_meta_function_1_1_function_call/#function-functioncall)**(InvokeFunction f, const int * m_parameterTypes =nullptr) |

## Public Types Documentation

### enum @3

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| TypeInfo | NumOperations + 1|   |




### typedef InvokeFunction

```cpp
typedef void(* QskMetaFunction::FunctionCall::InvokeFunction) (int which, QtPrivate::QSlotObjectBase *, QObject *, void **, bool *);
```


## Public Functions Documentation

### function typeInfo

```cpp
int typeInfo() const
```


### function refCount

```cpp
int refCount() const
```


### function parameterTypes

```cpp
inline const int * parameterTypes() const
```


### function setParameterTypes

```cpp
inline void setParameterTypes(
    const int * types
)
```


## Protected Functions Documentation

### function FunctionCall

```cpp
inline explicit FunctionCall(
    InvokeFunction f,
    const int * m_parameterTypes =nullptr
)
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET