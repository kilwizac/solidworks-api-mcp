---
type: property
interface: IMathTransform
member: IArrayData
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - rotation
  - matrix
  - iarraydata
  - imathtransform
  - math
  - transform
  - array
  - data
  - double
readonly: null
---

# IMathTransform.IArrayData

Gets and sets the array of 16 doubles for this transform.

## Signature

```csharp
System.Double IArrayData {get; set;}
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of 16 doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported

## Remarks

The first 9 elements define the 3x3 rotation matrix. The next 3 elements define the translation component. The next element defines the scaling component. The last 3 elements are unused.
The array data argument should be in a form that allows the direct calling of methods such as
IComponent2::Transform2
.