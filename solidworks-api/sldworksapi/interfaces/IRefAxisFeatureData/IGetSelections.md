---
type: method
interface: IRefAxisFeatureData
member: IGetSelections
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of selected entities for this reference axis feature
  -
    name: TypeArr
    type: System.Int32
    description: Array of the types of selected entities for this reference axis feature as defined by swSelectType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IRefAxisFeatureData.GetSelections
  - IRefAxisFeatureData.ISetSelections
  - IRefAxisFeatureData.SetSelections
keywords:
  - igetselections
  - irefaxisfeaturedata
  - ref
  - axis
  - feature
  - data
  - selections
  - count
  - int32
  - type
  - arr
  - object
---

# IRefAxisFeatureData.IGetSelections

Gets the selected entities for this reference axis feature.

## Signature

```csharp
System.Object IGetSelections( 
   System.Int32
Count
,
   out System.Int32
TypeArr
)
```
## Parameters

- `Count` (System.Int32): Number of selected entities for this reference axis feature
- `TypeArr` (System.Int32): Array of the types of selected entities for this reference axis feature as defined by swSelectType_e

## Return Value

in-process, unmanaged C++: Array of the selected entities VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IRefAxisFeatureData::GetSelectionsCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IRefAxisFeatureData.GetSelections`
- `IRefAxisFeatureData.ISetSelections`
- `IRefAxisFeatureData.SetSelections`