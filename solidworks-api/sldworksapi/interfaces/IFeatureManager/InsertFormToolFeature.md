---
type: method
interface: IFeatureManager
member: InsertFormToolFeature
returns: Feature
parameters:
  -
    name: Path
    type: System.String
    description: Pathname of the forming tool part file in the Design Library
  -
    name: Flip
    type: System.Boolean
    description: Whether to reverse the direction of the cut of the forming tool when inserted
  -
    name: RotAngle
    type: System.Double
    description: Angle of the forming tool
  -
    name: Config
    type: System.String
    description: Name of the configuration of the forming tool to insert
  -
    name: OverrideDoc
    type: System.Boolean
    description: True to override the document settings in Tools > Options > Document Properties > Sheet Metal, false to not
  -
    name: ShowPunch
    type: System.Boolean
    description: True to display the cut of the forming tool when the part is flattened, false to not; valid only if OverrideDoc = true
  -
    name: ShowProfile
    type: System.Boolean
    description: True to display the placement sketch of the forming tool when the part is flattened, false to not; valid only if OverrideDoc = true
  -
    name: ShowCenter
    type: System.Boolean
    description: True to display the center mark where the forming tool is located in the flat pattern, false to not; valid only if OverrideDoc = true
  -
    name: LinkToPart
    type: System.Boolean
    description: True to link the forming tool feature to its part in the Design Library, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IView.InsertPunchTable
keywords:
  - feature
  - see
  - also
  - ifeature
  - forming
  - tools
  - sheet
  - metal
  - isheetmetalfeaturedata
  - insertformtoolfeature
  - ifeaturemanager
  - manager
  - insert
  - form
  - tool
  - path
  - string
  - flip
  - boolean
  - rot
  - angle
  - double
  - config
  - override
  - doc
  - show
  - punch
  - profile
  - center
  - link
  - part
---

# IFeatureManager.InsertFormToolFeature

Obsolete. Superseded by IFeatureManager::CreateDefinition and IFeatureManager::CreateFeature.

## Signature

```csharp
Feature InsertFormToolFeature( 
   System.String
Path
,
   System.Boolean
Flip
,
   System.Double
RotAngle
,
   System.String
Config
,
   System.Boolean
OverrideDoc
,
   System.Boolean
ShowPunch
,
   System.Boolean
ShowProfile
,
   System.Boolean
ShowCenter
,
   System.Boolean
LinkToPart
)
```
## Parameters

- `Path` (System.String): Pathname of the forming tool part file in the Design Library
- `Flip` (System.Boolean): Whether to reverse the direction of the cut of the forming tool when inserted
- `RotAngle` (System.Double): Angle of the forming tool
- `Config` (System.String): Name of the configuration of the forming tool to insert
- `OverrideDoc` (System.Boolean): True to override the document settings in Tools > Options > Document Properties > Sheet Metal, false to not
- `ShowPunch` (System.Boolean): True to display the cut of the forming tool when the part is flattened, false to not; valid only if OverrideDoc = true
- `ShowProfile` (System.Boolean): True to display the placement sketch of the forming tool when the part is flattened, false to not; valid only if OverrideDoc = true
- `ShowCenter` (System.Boolean): True to display the center mark where the forming tool is located in the flat pattern, false to not; valid only if OverrideDoc = true
- `LinkToPart` (System.Boolean): True to link the forming tool feature to its part in the Design Library, false to not

## Return Value

IFeature

## Remarks

Before calling this method, select either a face or a 2D sketch containing points. If you select:
face, a single instance of the Design Library forming tool is placed on it.
sketch containing points, an instance of the Design Library forming tool is placed at each point in the sketch.
To create your own forming tool, call
IFeatureManager::CreateFormTool
.

## See Also

- `IView.InsertPunchTable`