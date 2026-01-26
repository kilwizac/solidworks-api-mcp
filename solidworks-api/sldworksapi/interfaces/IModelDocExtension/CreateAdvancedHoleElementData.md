---
type: method
interface: IModelDocExtension
member: CreateAdvancedHoleElementData
returns: System.Object
parameters:
  -
    name: ElmType
    type: System.Int32
    description: Advanced Hole element type as defined in swAdvWzdGeneralHoleTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - advanced
  - hole
  - elements
  - see
  - also
  - iadvancedholeelementdata
  - create
  - createadvancedholeelementdata
  - imodeldocextension
  - model
  - doc
  - extension
  - element
  - data
  - elm
  - type
  - int32
  - object
  - feature
  - vba
  - vb
  - net
---

# IModelDocExtension.CreateAdvancedHoleElementData

Creates an Advanced Hole element data object of the specified type.

## Signature

```csharp
System.Object CreateAdvancedHoleElementData( 
   System.Int32
ElmType
)
```
## Parameters

- `ElmType` (System.Int32): Advanced Hole element type as defined in swAdvWzdGeneralHoleTypes_e

## Return Value

IAdvancedHoleElementData (see Remarks )

## Remarks

After calling this method, use the IAdvancedHoleElementData object to get and set the properties common to all Advanced Hole elements. Cast the returned object using one of the following hole type-specific interfaces to set hole-specific properties:
ICounterboreElementData
ICountersinkElementData
IStraightElementData
IStraightTapElementData
ITaperedTapElementData
To create and Advanced Hole, see the
IFeatureManager::AdvancedHole
Remarks.

## Examples

- Create Advanced Hole Feature (VBA) (Create_Advanced_Hole_Example_VB.htm)
- Create Advanced Hole Feature (VB.NET) (Create_Advanced_Hole_Example_VBNET.htm)
- Create Advanced Hole Feature (C#) (Create_Advanced_Hole_Example_CSharp.htm)