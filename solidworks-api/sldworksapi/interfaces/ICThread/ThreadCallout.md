---
type: property
interface: ICThread
member: ThreadCallout
returns: Note
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - callout
  - see
  - also
  - icallout
  - cosmetic
  - threads
  - threadcallout
  - icthread
  - ic
  - thread
  - note
readonly: true
---

# ICThread.ThreadCallout

Gets the note for this cosmetic thread callout in a drawing.

## Signature

```csharp
Note ThreadCallout {get;}
```
## Parameters

None.

## Return Value

Pointer to the INote object for this cosmetic thread callout in a drawing

## Remarks

By getting the INote interface, you have access to all of its methods and properties, such as the ability to get or set the text or change the text format.