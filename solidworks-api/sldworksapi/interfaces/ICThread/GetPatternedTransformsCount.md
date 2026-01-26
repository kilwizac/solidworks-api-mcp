---
type: method
interface: ICThread
member: GetPatternedTransformsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ICThread.PatternedTransforms
keywords:
  - getpatternedtransformscount
  - icthread
  - ic
  - thread
  - patterned
  - transforms
  - count
  - int32
  - cosmetic
  - annotations
  - data
  - vb
  - net
  - vba
---

# ICThread.GetPatternedTransformsCount

Gets the number of instances of this cosmetic thread that are patterns of this feature.

## Signature

```csharp
System.Int32 GetPatternedTransformsCount()
```
## Parameters

None.

## Return Value

Number of instances of this cosmetic thread that are patterns of this feature

## Remarks

The value returned by this method does not include this cosmetic thread, which is the seed feature and not an instance of the pattern. Therefore, if this cosmetic thread is not used in any pattern feature, then this method returns 0.
Use this method before using
ICThread::IGetPatternedTransforms
to determine the size of the array to pass to that method.

## Examples

- Get Patterned Cosmetic Thread Annotations Data (C#) (Get_Patterned_Cosmetic_Thread_Annotations_Data_Example_CSharp.htm)
- Get Patterned Cosmetic Thread Annotations Data (VB.NET) (Get_Patterned_Cosmetic_Thread_Annotations_Data_Example_VBNET.htm)
- Get Patterned Cosmetic Thread Annotations Data (VBA) (Get_Patterned_Cosmetic_Thread_Annotations_Data_Example_VB.htm)

## See Also

- `ICThread.PatternedTransforms`