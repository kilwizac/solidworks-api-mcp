---
type: method
interface: IModelDocExtension
member: Make3DExperienceCompatible
returns: void
parameters:
  -
    name: IncludeComponents
    type: System.Boolean
    description: True to make components compatible with 3DExperience, false to not
  -
    name: Result
    type: System.Boolean
    description: True if model successfully made compatible with 3DExperience, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - make3dexperiencecompatible
  - imodeldocextension
  - model
  - doc
  - extension
  - make3
  - experience
  - compatible
  - include
  - components
  - boolean
  - result
  - void
---

# IModelDocExtension.Make3DExperienceCompatible

Makes the current model compatible with SOLIDWORKS Design Augmented.

## Signature

```csharp
void Make3DExperienceCompatible( 
   System.Boolean
IncludeComponents
,
   out System.Boolean
Result
)
```
## Parameters

- `IncludeComponents` (System.Boolean): True to make components compatible with 3DExperience, false to not
- `Result` (System.Boolean): True if model successfully made compatible with 3DExperience, false if not

## Return Value

Unknown.