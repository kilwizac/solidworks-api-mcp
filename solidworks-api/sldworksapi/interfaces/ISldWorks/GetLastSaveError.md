---
type: method
interface: ISldWorks
member: GetLastSaveError
returns: System.Object
parameters:
  -
    name: FilePath
    type: System.Object
    description: Path name of the document causing the save error
  -
    name: ErrorCode
    type: System.Object
    description: Error code of the save
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - ISldWorks.GetErrorMessages
keywords:
  - save
  - document
  - errors
  - getlastsaveerror
  - isldworks
  - sld
  - works
  - last
  - error
  - file
  - path
  - object
  - code
  - vba
  - vb
  - net
---

# ISldWorks.GetLastSaveError

Gets the last save error issued by Microsoft in the current session.

## Signature

```csharp
System.Object GetLastSaveError( 
   out System.Object
FilePath
,
   out System.Object
ErrorCode
)
```
## Parameters

- `FilePath` (System.Object): Path name of the document causing the save error
- `ErrorCode` (System.Object): Error code of the save

## Return Value

Text message of the save error

## Examples

- Get Last Save Error (VBA) (Get_Last_Save_Error_Example_VB.htm)
- Get Last Save Error (VB.NET) (Get_Last_Save_Error_Example_VBNET.htm)
- Get Last Save Error (C#) (Get_Last_Save_Error_Example_CSharp.htm)

## See Also

- `ISldWorks.GetErrorMessages`