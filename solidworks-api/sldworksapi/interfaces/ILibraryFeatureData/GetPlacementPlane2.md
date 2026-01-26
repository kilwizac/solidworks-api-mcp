---
type: method
interface: ILibraryFeatureData
member: GetPlacementPlane2
returns: System.Object
parameters:
  -
    name: Scope
    type: System.Int32
    description: Placement scope as defined in swLibFeatureData_e
  -
    name: Type
    type: System.Int32
    description: Placement type as defined in swSelectType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILibraryFeatureData.SetPlacementPlane
keywords:
  - library
  - feature
  - see
  - also
  - ilibraryfeaturedata
  - references
  - dimensions
  - features
  - planes
  - irefplane
  - getplacementplane2
  - data
  - placement
  - plane2
  - scope
  - int32
  - type
  - object
  - vba
  - vb
  - net
---

# ILibraryFeatureData.GetPlacementPlane2

Gets the face or plane on which the library feature was placed.

## Signature

```csharp
System.Object GetPlacementPlane2( 
   System.Int32
Scope
,
   out System.Int32
Type
)
```
## Parameters

- `Scope` (System.Int32): Placement scope as defined in swLibFeatureData_e
- `Type` (System.Int32): Placement type as defined in swSelectType_e

## Return Value

Face or plane

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- Get Library Feature Data (VBA) (Get_Library_Feature_Data_Example_VB.htm)
- Get Library Feature Data (VB.NET) (Get_Library_Feature_Data_Example_VBNET.htm)
- Get Library Feature Data (C#) (Get_Library_Feature_Data_Example_CSharp.htm)

## See Also

- `ILibraryFeatureData.SetPlacementPlane`