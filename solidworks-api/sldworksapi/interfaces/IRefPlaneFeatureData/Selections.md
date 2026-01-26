---
type: property
interface: IRefPlaneFeatureData
member: Selections
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IRefPlaneFeatureData.GetSelectionsCount
  - IRefPlaneFeatureData.IGetSelections
  - IRefPlaneFeatureData.ISetSelections
keywords:
  - selections
  - irefplanefeaturedata
  - ref
  - plane
  - feature
  - data
  - object
readonly: null
---

# IRefPlaneFeatureData.Selections

Gets or sets the selected entities used to create the reference plane feature or sets the entities to use to create the reference plane feature.

## Signature

```csharp
System.Object Selections {get; set;}
```
## Parameters

None.

## Return Value

Array of selected entities

## Remarks

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

- `IRefPlaneFeatureData.GetSelectionsCount`
- `IRefPlaneFeatureData.IGetSelections`
- `IRefPlaneFeatureData.ISetSelections`