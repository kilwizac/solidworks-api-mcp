---
type: method
interface: ILibraryFeatureData
member: GetPlacementPlane
returns: System.Object
parameters:
  -
    name: Type
    type: System.Int32
    description: Placement type as defined in swSelectType_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ILibraryFeatureData.SetPlacementPlane
keywords:
  - getplacementplane
  - ilibraryfeaturedata
  - library
  - feature
  - data
  - placement
  - plane
  - type
  - int32
  - object
  - vba
---

# ILibraryFeatureData.GetPlacementPlane

Obsolete. Superseded by ILibraryFeatureData::GetPlacementPlane2.

## Signature

```csharp
System.Object GetPlacementPlane( 
   out System.Int32
Type
)
```
## Parameters

- `Type` (System.Int32): Placement type as defined in swSelectType_e

## Return Value

Face or plane

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- Get Library Feature Data (VBA) (Get_Library_Feature_Data_Example_VB.htm)

## See Also

- `ILibraryFeatureData.SetPlacementPlane`