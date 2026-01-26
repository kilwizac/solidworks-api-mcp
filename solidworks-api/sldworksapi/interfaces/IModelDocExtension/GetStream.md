---
type: method
interface: IModelDocExtension
member: GetStream
returns: System.Object
parameters:
  -
    name: StreamType
    type: System.Int32
    description: 1 = material stream
  -
    name: ReadOnly
    type: System.Boolean
    description: True if the stream is read-only, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - stream
  - handle
  - getstream
  - imodeldocextension
  - model
  - doc
  - extension
  - type
  - int32
  - read
  - only
  - boolean
  - object
---

# IModelDocExtension.GetStream

Gets the handle for the specified stream.

## Signature

```csharp
System.Object GetStream( 
   System.Int32
StreamType
,
   out System.Boolean
ReadOnly
)
```
## Parameters

- `StreamType` (System.Int32): 1 = material stream
- `ReadOnly` (System.Boolean): True if the stream is read-only, false if not

## Return Value

Pointer to the IUnknown interface for this stream

## Remarks

To release the stream, call
IModelDocExtension::ReleaseStream
.
VB Example
This example illustrates attaching an XML document to a stream, and then releasing the stream.
Dim swApp As Object
Sub main()
Set swApp = Application.SldWorks
Dim docext As SldWorks.ModelDocExtension
Set docext = swApp.ActiveDoc.Extension
Dim xmldoc As MSXML2.DOMDocument
Set xmldoc = CreateObject("MSXML2.DOMDocument")
Dim stat As Boolean
Dim stream
Set stream = docext.
GetStream
(1, stat)
xmldoc.Load (stream)
docext.
ReleaseStream
(1)
xmldoc.Save ("C:\temp\xmlmat.xml")
End Sub
C++ Example
//--------
CComPtr<IModelDocExtension> ext;
m_iModelDoc2->get_Extension(&ext);
LPSTREAM stream = NULL;
VARIANT_BOOL access = 0;
ext->
IGetStream
(1, &access, &stream);
// Your code
if (stream)
{
VARIANT_BOOL status;
ext->
IReleaseStream
(1, &status);
stream->Release();
}
//--------