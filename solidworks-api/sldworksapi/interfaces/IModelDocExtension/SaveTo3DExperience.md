---
type: method
interface: IModelDocExtension
member: SaveTo3DExperience
returns: System.Boolean
parameters:
  -
    name: Options
    type: System.Object
    description: ISaveTo3DExperienceOptions (see Remarks )
  -
    name: Errors
    type: System.Int32
    description: Error codes
  -
    name: Warnings
    type: System.Int32
    description: Warning codes
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - file-io
  - ui
related: []
keywords:
  - 3dexperience
  - solidworks
  - connected
  - saveto3dexperience
  - imodeldocextension
  - model
  - doc
  - extension
  - save
  - to3
  - experience
  - options
  - object
  - errors
  - int32
  - warnings
  - boolean
---

# IModelDocExtension.SaveTo3DExperience

Saves this document in SOLIDWORKS Design Augmented using the specified save options.

## Signature

```csharp
System.Boolean SaveTo3DExperience( 
   System.Object
Options
,
   out System.Int32
Errors
,
   out System.Int32
Warnings
)
```
## Parameters

- `Options` (System.Object): ISaveTo3DExperienceOptions (see Remarks )
- `Errors` (System.Int32): Error codes
- `Warnings` (System.Int32): Warning codes

## Return Value

True if the document saved successfully, false if not

## Remarks

If the file is:
new and the file name is specified in Options, then this method acts like
File > Save
. If any other options are specified, then this method acts like
File > Save With Options
.
already saved to the platform and a new file name is specified in Options, then this method acts like
File > Save As New
.