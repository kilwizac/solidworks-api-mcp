---
type: method
interface: IPartDoc
member: MirrorPart2
returns: Feature
parameters:
  -
    name: BreakLink
    type: System.Boolean
    description: True to break the link to the original part, false to not
  -
    name: Options
    type: System.Int32
    description: Insertion options as defined in swMirrorPartOptions_e
  -
    name: ResultPart
    type: ModelDoc2
    description: IModelDoc2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IFeatureManager.InsertMirrorFeature2
  - IMirrorPartFeatureData
  - IPartDoc.InsertMirrorAll
  - IPartDoc.MirrorFeature
keywords:
  - mirror
  - parts
  - see
  - also
  - ipartdoc
  - mirrorpart2
  - part
  - doc
  - part2
  - break
  - link
  - boolean
  - options
  - int32
  - result
  - model
  - doc2
  - feature
  - information
  - vba
  - vb
  - net
  - sheet
  - metal
---

# IPartDoc.MirrorPart2

Creates a new part document that mirrors this part about a selected reference plane or planar face.

## Signature

```csharp
Feature MirrorPart2( 
   System.Boolean
BreakLink
,
   System.Int32
Options
,
   out ModelDoc2
ResultPart
)
```
## Parameters

- `BreakLink` (System.Boolean): True to break the link to the original part, false to not
- `Options` (System.Int32): Insertion options as defined in swMirrorPartOptions_e
- `ResultPart` (ModelDoc2): IModelDoc2

## Return Value

IFeature

## Remarks

Before calling this method, you must select a reference plane or planar face about which to mirror this part.

## Examples

- Get Mirror Part Information (VBA) (Get_Mirror_Part_Information_Example_VB.htm)
- Get Mirror Part Information (VB.NET) (Get_Mirror_Part_Information_Example_VBNET.htm)
- Get Mirror Part Information (C#) (Get_Mirror_Part_Information_Example_CSharp.htm)
- Mirror Sheet-metal Part (C#) (Mirror_Sheet-metal_Part_Example_CSharp.htm)
- Mirror Sheet-metal Part (VB.NET) (Mirror_Sheet-metal_Part_Example_VBNET.htm)
- Mirror Sheet-metal Part (VBA) (Mirror_Sheet-metal_Part_Example_VB.htm)

## See Also

- `IFeatureManager.InsertMirrorFeature2`
- `IMirrorPartFeatureData`
- `IPartDoc.InsertMirrorAll`
- `IPartDoc.MirrorFeature`