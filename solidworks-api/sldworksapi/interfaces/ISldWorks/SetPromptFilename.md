---
type: method
interface: ISldWorks
member: SetPromptFilename
returns: void
parameters:
  -
    name: FileName
    type: System.String
    description: Filename
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - ISldWorks.LoadFile4
  - ISldWorks.OpenDoc6
  - ISldWorks.SetMultipleFilenamesPrompt
  - ISldWorks.SetNewFilename
keywords:
  - setpromptfilename
  - isldworks
  - sld
  - works
  - prompt
  - filename
  - file
  - name
  - string
  - void
---

# ISldWorks.SetPromptFilename

Obsolete. Superseded by ISldWorks::SetPromptFilename2.

## Signature

```csharp
void SetPromptFilename( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Filename

## Return Value

Unknown.

## Remarks

The filename specified is only used if the SOLIDWORKS events
PromptForFileNameNotify
or
ReferencedFilePreNotify
returns S_FALSE. This implies that you cannot specify an initial filename for SOLIDWORKS to use in the standard dialog. Instead, you must provide your own file dialog and return the filename after the user selects it.

## See Also

- `ISldWorks.LoadFile4`
- `ISldWorks.OpenDoc6`
- `ISldWorks.SetMultipleFilenamesPrompt`
- `ISldWorks.SetNewFilename`