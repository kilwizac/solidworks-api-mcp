---
type: method
interface: ISldWorks
member: SetMultipleFilenamesPrompt
returns: void
parameters:
  -
    name: FileName
    type: System.Object
    description: Array of filenames
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - ISldWorks.SetNewFilename
  - ISldWorks.SetPromptFilename
keywords:
  - document
  - open
  - files
  - setmultiplefilenamesprompt
  - isldworks
  - sld
  - works
  - multiple
  - filenames
  - prompt
  - file
  - name
  - object
  - void
---

# ISldWorks.SetMultipleFilenamesPrompt

Sets the new filenames to open in response to the ISldWorks PromptForMultipleFileNamesNotify event.

## Signature

```csharp
void SetMultipleFilenamesPrompt( 
   System.Object
FileName
)
```
## Parameters

- `FileName` (System.Object): Array of filenames

## Return Value

Unknown.

## Remarks

The filenames specified are only used if the SOLIDWORKS
PromptForMultipleFileNamesNotify
event returns S_FALSE. This implies that you cannot specify initial filenames for SOLIDWORKS to use in the standard dialog. Instead, you must provide your own file dialog and return the filenames after the user selects them.
Guidelines for using this method when the cause argument of the SOLIDWORKS PromptForMultipleFileNamesNotify event is set to
swSaveVirtualComponentExternally
:
Length of the Filename argument array must be equal to the length of the suggestedFileNames argument array passed into ISldWorks::SetMultipleFilenamesPrompt. If there is a mismatch, all virtual components will be saved internal to the assembly with the suggested file name passed by the SOLIDWORKS PromptForMultipleFileNamesNotify event .
Supplying a full path and file name will save a virtual component external to the assembly using that path and file name.
Supplying only a file name (i.e., no path) will save the virtual component internal to the assembly with the suggested file name passed by the SOLIDWORKS PromptForMultipleFileNamesNotify event .
This method cannot be used to change the name of an internally saved virtual component.
Supplying an empty string will save the virtual component external to the assembly and in the same folder as the assembly with the suggested file name passed by the SOLIDWORKS PromptForMultipleFileNamesNotify event.
Supplying an invalid path and file name or insufficient access rights will save the virtual component internal to the assembly with the suggested file name passed by the SOLIDWORKS PromptForMultipleFileNamesNotify event.
Insufficient access rights to the path and file name will save the virtual component internal to the assembly with the suggested file name passed by the SOLIDWORKS PromptForMultipleFileNamesNotify event.

## See Also

- `ISldWorks.SetNewFilename`
- `ISldWorks.SetPromptFilename`