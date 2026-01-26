---
type: method
interface: ISaveTo3DExperienceOptions
member: SetRevisionComments
returns: System.Boolean
parameters:
  -
    name: RevisionComments
    type: System.String
    description: Save comments
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related: []
keywords:
  - setrevisioncomments
  - isaveto3dexperienceoptions
  - save
  - to3
  - experience
  - options
  - revision
  - comments
  - string
  - boolean
  - iplmobjectspecification
---

# ISaveTo3DExperienceOptions.SetRevisionComments

Sets the specified revision comments when saving a document in SOLIDWORKS Design Augmented.

## Signature

```csharp
System.Boolean SetRevisionComments( 
   System.String
RevisionComments
)
```
## Parameters

- `RevisionComments` (System.String): Save comments

## Return Value

True if the document saved successfully, false if not

## Examples

- IPLMObjectSpecification (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPLMObjectSpecification)