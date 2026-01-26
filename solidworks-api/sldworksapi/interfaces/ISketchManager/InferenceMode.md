---
type: property
interface: ISketchManager
member: InferenceMode
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - inferencemode
  - isketchmanager
  - sketch
  - manager
  - inference
  - mode
  - boolean
readonly: null
---

# ISketchManager.InferenceMode

Obsolete. Superseded by ISldWorks::GetUserPreferenceToggle or ISldWorks::SetUserPreferenceToggle and swUserPreferenceToggle_e.swSketchInference.

## Signature

```csharp
System.Boolean InferenceMode {get; set;}
```
## Parameters

None.

## Return Value

True if sketch inference mode is on, false if off

## Remarks

This property affects sketch entity snapping and inferring constraints to other geometry during creation.
Setting inference mode to...
Allows...
True
Inferencing during sketch operations, subject to other settings that may disable inferencing such as
ISketchManager::AutoInference
,
ISketchManager::AddToDB
, and
IDrawingDoc::StartDrawing
.
False
Faster sketching without inferencing, similar to SketchManager::AddToDB, except that using this method does not disable undo operations.