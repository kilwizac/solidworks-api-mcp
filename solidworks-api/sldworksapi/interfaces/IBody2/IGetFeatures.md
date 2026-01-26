---
type: method
interface: IBody2
member: IGetFeatures
returns: Feature
parameters:
  -
    name: NumberOfFeatures
    type: System.Int32
    description: Number of features in this body in a multibody sheet metal part
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
  - geometry
related:
  - IBody2.GetFeatures
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
  - igetfeatures
  - body2
  - features
  - number
  - int32
---

# IBody2.IGetFeatures

Gets the features in this body in a multibody sheet metal part.

## Signature

```csharp
Feature IGetFeatures( 
   System.Int32
NumberOfFeatures
)
```
## Parameters

- `NumberOfFeatures` (System.Int32): Number of features in this body in a multibody sheet metal part

## Return Value

in-process, unmanaged C++: Pointer to an array of features in this body in a multibody sheet metal part VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IBody2::GetFeatureCount
to get NumberOfFeatures.
The features of a body in a multibody sheet metal part are located in the solid bodies folder in the FeatureManager design tree.

## See Also

- `IBody2.GetFeatures`
- `IBodyFolder`
- `IBodyFolder.GetBodies`
- `IBodyFolder.GetBodyCount`
- `IBodyFolder.IGetBodies`