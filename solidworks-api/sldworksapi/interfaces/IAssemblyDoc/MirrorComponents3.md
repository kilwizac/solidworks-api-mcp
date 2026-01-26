---
type: method
interface: IAssemblyDoc
member: MirrorComponents3
returns: System.Object
parameters:
  -
    name: MirrorPlane
    type: System.Object
    description: Reference plane or planar face about which to mirror the components
  -
    name: ComponentsToInstance
    type: System.Object
    description: Array of seed components with which to create copy mirror components
  -
    name: ComponentOrientations
    type: System.Object
    description: Array of swMirrorComponentOrientation_e values; valid only if ComponentsToInstance is not Nothing or null
  -
    name: OrientAboutCenterOfMass
    type: System.Boolean
    description: True to orient the mirror components about the center of mass, false to orient them about the bounding box center
  -
    name: ComponentsToMirror
    type: System.Object
    description: Array of seed components with which to create opposite-hand mirror components
  -
    name: CreateDerivedConfigurations
    type: System.Boolean
    description: True to create a derived configuration of the mirror components in the original assembly, false to create new part files; valid only if ComponentsToMirror and MirroredComponentFilenames are not Nothing or null and NameModifierType is swMirrorComponentNameModifier_e .swMirrorComponentName_Custom
  -
    name: MirroredComponentFilenames
    type: System.Object
    description: Array of mirror part file names whose names can be further modified by the settings of NameModifierType and NameModifier; if CreateDerivedConfigurations is true, then this array contains the names for the new configurations and NameModifierType must be swMirrorComponentNameModifier_e.swMirrorComponentName_Custom; valid only if ComponentsToMirror is not Nothing or null
  -
    name: NameModifierType
    type: System.Int32
    description: Mirror part file name modifier type as defined in swMirrorComponentNameModifier_e; valid only if ComponentsToMirror and MirroredComponentFilenames are not Nothing or null
  -
    name: NameModifier
    type: System.String
    description: Prefix or suffix to apply to file names of mirror parts; valid only if NameModifierType is swMirrorComponentNameModifier_e.swMirrorComponentName_Prefix or swMirrorComponentNameModifier_e.swMirrorComponentName_Suffix and ComponentsToMirror and if MirroredComponentFilenames are not Nothing or null
  -
    name: MirroredComponentFileLocation
    type: System.String
    description: Folder where to save the mirror parts; valid only if CreateDerivedConfigurations is false
  -
    name: ImportOptions
    type: System.Int32
    description: Mirror transfer options as defined in swMirrorPartOptions_e
  -
    name: BreakLinks
    type: System.Boolean
    description: True to break the links between the mirror parts and the original parts, false to keep the links
  -
    name: PreserveZAxis
    type: System.Boolean
    description: True to mirror the Z-axis orientation in the mirror part, false to flip the Z-axis orientation in the mirror part
  -
    name: SyncFlexibleSubAssemblies
    type: System.Boolean
    description: True to synchronize the movement of flexible subassembly components with the parent component, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IComponent2.IsMirrored
  - IPartDoc.IsMirrored
keywords:
  - mirrorcomponents3
  - iassemblydoc
  - assembly
  - doc
  - mirror
  - components3
  - plane
  - object
  - components
  - instance
  - component
  - orientations
  - orient
  - about
  - center
  - mass
  - boolean
  - create
  - derived
  - configurations
  - mirrored
  - filenames
  - name
  - modifier
  - type
  - int32
  - string
  - file
  - location
  - import
  - options
  - break
  - links
  - preserve
  - axis
  - sync
  - flexible
  - sub
  - assemblies
  - vb
  - net
  - vba
---

# IAssemblyDoc.MirrorComponents3

Obsolete. Superseded by IFeatureManager::CreateDefinition, IFeatureManager::CreateFeature, and IMirrorComponentFeatureData.

## Signature

```csharp
System.Object MirrorComponents3( 
   System.Object
MirrorPlane
,
   System.Object
ComponentsToInstance
,
   System.Object
ComponentOrientations
,
   System.Boolean
OrientAboutCenterOfMass
,
   System.Object
ComponentsToMirror
,
   System.Boolean
CreateDerivedConfigurations
,
   System.Object
MirroredComponentFilenames
,
   System.Int32
NameModifierType
,
   System.String
NameModifier
,
   System.String
MirroredComponentFileLocation
,
   System.Int32
ImportOptions
,
   System.Boolean
BreakLinks
,
   System.Boolean
PreserveZAxis
,
   System.Boolean
SyncFlexibleSubAssemblies
)
```
## Parameters

- `MirrorPlane` (System.Object): Reference plane or planar face about which to mirror the components
- `ComponentsToInstance` (System.Object): Array of seed components with which to create copy mirror components
- `ComponentOrientations` (System.Object): Array of swMirrorComponentOrientation_e values; valid only if ComponentsToInstance is not Nothing or null
- `OrientAboutCenterOfMass` (System.Boolean): True to orient the mirror components about the center of mass, false to orient them about the bounding box center
- `ComponentsToMirror` (System.Object): Array of seed components with which to create opposite-hand mirror components
- `CreateDerivedConfigurations` (System.Boolean): True to create a derived configuration of the mirror components in the original assembly, false to create new part files; valid only if ComponentsToMirror and MirroredComponentFilenames are not Nothing or null and NameModifierType is swMirrorComponentNameModifier_e .swMirrorComponentName_Custom
- `MirroredComponentFilenames` (System.Object): Array of mirror part file names whose names can be further modified by the settings of NameModifierType and NameModifier; if CreateDerivedConfigurations is true, then this array contains the names for the new configurations and NameModifierType must be swMirrorComponentNameModifier_e.swMirrorComponentName_Custom; valid only if ComponentsToMirror is not Nothing or null
- `NameModifierType` (System.Int32): Mirror part file name modifier type as defined in swMirrorComponentNameModifier_e; valid only if ComponentsToMirror and MirroredComponentFilenames are not Nothing or null
- `NameModifier` (System.String): Prefix or suffix to apply to file names of mirror parts; valid only if NameModifierType is swMirrorComponentNameModifier_e.swMirrorComponentName_Prefix or swMirrorComponentNameModifier_e.swMirrorComponentName_Suffix and ComponentsToMirror and if MirroredComponentFilenames are not Nothing or null
- `MirroredComponentFileLocation` (System.String): Folder where to save the mirror parts; valid only if CreateDerivedConfigurations is false
- `ImportOptions` (System.Int32): Mirror transfer options as defined in swMirrorPartOptions_e
- `BreakLinks` (System.Boolean): True to break the links between the mirror parts and the original parts, false to keep the links
- `PreserveZAxis` (System.Boolean): True to mirror the Z-axis orientation in the mirror part, false to flip the Z-axis orientation in the mirror part
- `SyncFlexibleSubAssemblies` (System.Boolean): True to synchronize the movement of flexible subassembly components with the parent component, false to not

## Return Value

Array of mirror components

## Examples

- Mirror Components (C#) (Mirror_Components_Example_CSharp.htm)
- Mirror Components (VB.NET) (Mirror_Components_Example_VBNET.htm)
- Mirror Components (VBA) (Mirror_Components_Example_VB.htm)

## See Also

- `IComponent2.IsMirrored`
- `IPartDoc.IsMirrored`