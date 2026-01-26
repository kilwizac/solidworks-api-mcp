---
type: method
interface: IFeatureManager
member: CreateFormTool2
returns: Feature
parameters:
  -
    name: OriginX
    type: System.Double
    description: x coordinate of insertion point
  -
    name: OriginY
    type: System.Double
    description: y coordinate of insertion point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - forming
  - tools
  - feature
  - see
  - also
  - ifeature
  - createformtool2
  - ifeaturemanager
  - manager
  - create
  - form
  - tool2
  - origin
  - double
  - tool
  - vba
  - vb
  - net
---

# IFeatureManager.CreateFormTool2

Creates a forming tool feature with the specified point of insertion in a sheet metal part.

## Signature

```csharp
Feature CreateFormTool2( 
   System.Double
OriginX
,
   System.Double
OriginY
)
```
## Parameters

- `OriginX` (System.Double): x coordinate of insertion point
- `OriginY` (System.Double): y coordinate of insertion point

## Return Value

IFeature

## Remarks

Before calling this method, call
IModelDocExtension::SelectByID2
:
with Append = True and Mark = 1 to select the stopping face.
(optional) one or more times with Append = True and Mark = 2 to select the faces to remove.
To insert a forming tool from the Design Library, call
IFeatureManager::InsertFormToolFeature
.

## Examples

- Create Forming Tool (VBA) (Create_Forming_Tool_Example_VB.htm)
- Create Forming Tool (VB.NET) (Create_Forming_Tool_Example_VBNET.htm)
- Create Forming Tool (C#) (Create_Forming_Tool_Example_CSharp.htm)