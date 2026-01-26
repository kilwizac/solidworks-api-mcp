---
type: method
interface: IFeature
member: DeSelect
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IFeature.GetSpecificFeature2
  - IFeature.Select2
keywords:
  - deselect
  - ifeature
  - feature
  - de
  - select
  - boolean
  - section
  - properties
  - faces
  - planes
  - vba
---

# IFeature.DeSelect

Deselects this feature.

## Signature

```csharp
System.Boolean DeSelect()
```
## Parameters

None.

## Return Value

True if the feature is deselected successfully, false if not

## Remarks

Use
IModelDoc2::DeSelectByID
instead of this method. This method does not work well when a PropertyManager page is open or a command is running. IModelDoc2::DeSelectByID handles selection correctly whether or not a command is running.

## Examples

- Get Section Properties for Faces from Section Planes (VBA) (Get_Section_Properties_Example_VB.htm)

## See Also

- `IFeature.GetSpecificFeature2`
- `IFeature.Select2`