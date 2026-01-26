---
type: method
interface: ISldWorks
member: SetPromptFilename2
returns: void
parameters:
  -
    name: FileName
    type: System.String
    description: Full pathname of file to open
  -
    name: ConfigName
    type: System.String
    description: Configuration name of file to open
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - ISldWorks.LoadFile4
  - ISldWorks.OpenDoc7
  - ISldWorks.SetMultipleFilenamesPrompt
  - ISldWorks.SetNewFilename
keywords:
  - setpromptfilename2
  - isldworks
  - sld
  - works
  - prompt
  - filename2
  - file
  - name
  - string
  - config
  - void
---

# ISldWorks.SetPromptFilename2

Sets the file to open in response to a SOLIDWORKS event.

## Signature

```csharp
void SetPromptFilename2( 
   System.String
FileName
,
   System.String
ConfigName
)
```
## Parameters

- `FileName` (System.String): Full pathname of file to open
- `ConfigName` (System.String): Configuration name of file to open

## Return Value

Unknown.

## Remarks

FileName is used only:
When the handler of this event...
Returns...
FileCloseNotify
non-
0
value
PromptForFileNameNotify
non-
0
value
ReferencedFilePreNotify
non-
0
value
Because the filename specified is used only when
PromptForFileNameNotify
and
ReferencedFilePreNotify
return S_FALSE, you cannot specify an initial filename for SOLIDWORKS to use in the standard dialog. Instead, you must provide your own file dialog and return the filename after the user selects it.

## See Also

- `ISldWorks.LoadFile4`
- `ISldWorks.OpenDoc7`
- `ISldWorks.SetMultipleFilenamesPrompt`
- `ISldWorks.SetNewFilename`