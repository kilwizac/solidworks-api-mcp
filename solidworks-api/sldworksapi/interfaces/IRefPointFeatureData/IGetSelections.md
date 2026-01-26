---
type: method
interface: IRefPointFeatureData
member: IGetSelections
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of selected entities
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IRefPointFeatureData.ISetSelections
  - IRefPointFeatureData.Selections
keywords:
  - igetselections
  - irefpointfeaturedata
  - ref
  - point
  - feature
  - data
  - selections
  - count
  - int32
  - object
---

# IRefPointFeatureData.IGetSelections

Gets the selected entities to use to create the reference points.

## Signature

```csharp
System.Object IGetSelections( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of selected entities

## Return Value

in-process, unmanaged C++: Pointer to an array of selected entities of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IRefPointFeatureData::GetSelectionsCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IRefPointFeatureData.ISetSelections`
- `IRefPointFeatureData.Selections`