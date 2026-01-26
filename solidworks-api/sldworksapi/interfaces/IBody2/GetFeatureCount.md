---
type: method
interface: IBody2
member: GetFeatureCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
  - geometry
related:
  - IBody2.GetFeatures
  - IBody2.IGetFeatures
  - IBodyFolder
  - IBodyFolder.GetBodies
  - IBodyFolder.GetBodyCount
  - IBodyFolder.IGetBodies
keywords:
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - feature
  - ifeature
  - bodies
  - ibody2
  - getfeaturecount
  - body2
  - count
  - int32
  - features
  - multibody
  - part
  - vb
  - net
  - vba
---

# IBody2.GetFeatureCount

Gets the number of features in this body in a multibody sheet metal part.

## Signature

```csharp
System.Int32 GetFeatureCount()
```
## Parameters

None.

## Return Value

Number of features in this body

## Remarks

The features of a body in a multibody sheet metal part are located in the solid bodies folder in the FeatureManager design tree.

## Examples

- Get Features of Multibody Sheet Metal Part (C#) (Get_Features_of_Multibody_Sheet_Metal_Part_Example_CSharp.htm)
- Get Features of Multibody Sheet Metal Part (VB.NET) (Get_Features_of_Multibody_Sheet_Metal_Part_Example_VBNET.htm)
- Get Features of Multibody Sheet Metal Part (VBA) (Get_Features_of_Multibody_Sheet_Metal_Part_Example_VB.htm)

## See Also

- `IBody2.GetFeatures`
- `IBody2.IGetFeatures`
- `IBodyFolder`
- `IBodyFolder.GetBodies`
- `IBodyFolder.GetBodyCount`
- `IBodyFolder.IGetBodies`