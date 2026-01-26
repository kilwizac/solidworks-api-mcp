---
type: method
interface: IBody2
member: GetFeatures
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
  - geometry
related:
  - IBody2.GetFeatureCount
  - IBody2.IGetFeatures
  - IBodyFolder
  - IBodyFolder.GetBodies
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
  - getfeatures
  - body2
  - features
  - object
  - multibody
  - part
  - vb
  - net
  - vba
---

# IBody2.GetFeatures

Gets the features in this body in a multibody sheet metal part.

## Signature

```csharp
System.Object GetFeatures()
```
## Parameters

None.

## Return Value

Array of features in this body in a sheet metal part

## Remarks

The features of a body in a multibody sheet metal part are located in the solid bodies folder in the FeatureManager design tree.

## Examples

- Get Features of Multibody Sheet Metal Part (C#) (Get_Features_of_Multibody_Sheet_Metal_Part_Example_CSharp.htm)
- Get Features of Multibody Sheet Metal Part (VB.NET) (Get_Features_of_Multibody_Sheet_Metal_Part_Example_VBNET.htm)
- Get Features of Multibody Sheet Metal Part (VBA) (Get_Features_of_Multibody_Sheet_Metal_Part_Example_VB.htm)

## See Also

- `IBody2.GetFeatureCount`
- `IBody2.IGetFeatures`
- `IBodyFolder`
- `IBodyFolder.GetBodies`
- `IBodyFolder.IGetBodies`