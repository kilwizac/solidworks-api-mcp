---
type: method
interface: IParameter
member: GetVectorVB
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IParameter.GetVector
  - IParameter.SetVector2
keywords:
  - getvectorvb
  - iparameter
  - parameter
  - vector
  - vb
  - object
---

# IParameter.GetVectorVB

Extracts information of type vector from a parameter.

## Signature

```csharp
System.Object GetVectorVB()
```
## Parameters

None.

## Return Value

Array of 3 values in the vector (see Remarks )

## Remarks

This method packs the data into a SafeArray in Visual Basic for Applications (VBA):
[ X,Y,Z ]
where:
(double) X
x vector value stored on the parameter
(double) Y
y vector value stored on the parameter
(double) Z
z vector value stored on the parameter

## See Also

- `IParameter.GetVector`
- `IParameter.SetVector2`