---
title: QskMetaFunctionCall::FunctorFunctionCall
layout: docs

---




 [More...](#detailed-description)

Inherits from QskMetaFunction::FunctionCall

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[FunctorFunctionCall](/docs/classes/class_qsk_meta_function_call_1_1_functor_function_call/#function-functorfunctioncall)**(Function function) |
| void | **[invoke](/docs/classes/class_qsk_meta_function_call_1_1_functor_function_call/#function-invoke)**(int which, QSlotObjectBase * functionCall, QObject * object, void ** args, bool * ) |

## Detailed Description

```cpp
template <typename Function ,
int N,
typename Args ,
typename R >
class QskMetaFunctionCall::FunctorFunctionCall;
```

## Public Functions Documentation

### function FunctorFunctionCall

```cpp
inline explicit FunctorFunctionCall(
    Function function
)
```


### function invoke

```cpp
static inline void invoke(
    int which,
    QSlotObjectBase * functionCall,
    QObject * object,
    void ** args,
    bool * 
)
```


-------------------------------

Updated on 22 January 2021 at 17:05:48 CET