---
type: method
interface: IFeatureManager
member: InsertSheetMetalLoftedBend
returns: Feature
parameters:
  -
    name: ThickDirType
    type: System.Int32
    description: Toggles the thickening direction: 0 = outside 1 = inside (default value)
  -
    name: Thickness
    type: System.Double
    description: Thickness of the bend
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ILoftFeatureData
  - ISheetMetalFeatureData
keywords:
  - insertsheetmetalloftedbend
  - ifeaturemanager
  - feature
  - manager
  - insert
  - sheet
  - metal
  - lofted
  - bend
  - thick
  - dir
  - type
  - int32
  - thickness
  - double
---

# IFeatureManager.InsertSheetMetalLoftedBend

Obsolete. Superseded by IFeatureManager::InsertSheetMetalLoftedBend2.

## Signature

```csharp
Feature InsertSheetMetalLoftedBend( 
   System.Int32
ThickDirType
,
   System.Double
Thickness
)
```
## Parameters

- `ThickDirType` (System.Int32): Toggles the thickening direction: 0 = outside 1 = inside (default value)
- `Thickness` (System.Double): Thickness of the bend

## Return Value

Pointer to the lofted-bend feature in the sheet metal part

## See Also

- `ILoftFeatureData`
- `ISheetMetalFeatureData`