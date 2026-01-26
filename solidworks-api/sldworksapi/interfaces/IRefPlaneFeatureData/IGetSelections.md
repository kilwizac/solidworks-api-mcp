---
type: method
interface: IRefPlaneFeatureData
member: IGetSelections
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of selected entities to use to create this reference plane
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IRefPlaneFeatureData.ISetSelections
  - IRefPlaneFeatureData.Selections
keywords:
  - igetselections
  - irefplanefeaturedata
  - ref
  - plane
  - feature
  - data
  - selections
  - count
  - int32
  - object
---

# IRefPlaneFeatureData.IGetSelections

Gets the selected entities used to create this reference plane feature.

## Signature

```csharp
System.Object IGetSelections( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of selected entities to use to create this reference plane

## Return Value

in-process, unmanaged C++: Pointer to an array of entities of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IRefPlaneFeatureData::GetSelectionsCount
to get the value for Count.
See
Accessing Selections that Define Features
for additional details on using this method.
IMPORTANT:
Reference planes created in SOLIDWORKS 2010 or later are constraint based; reference planes created in SOLIDWORKS 2009 or earlier are not. See the
Remarks
section in the
IRefPlaneFeatureData interface
topic for details about reference planes and this interface.

## See Also

- `IRefPlaneFeatureData.ISetSelections`
- `IRefPlaneFeatureData.Selections`