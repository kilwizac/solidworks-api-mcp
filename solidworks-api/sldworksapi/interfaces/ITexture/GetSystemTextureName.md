---
type: method
interface: ITexture
member: GetSystemTextureName
returns: System.String
parameters:
  -
    name: FileNameIn
    type: System.String
    description: Path and filename of texture (see Remarks )
  -
    name: Res
    type: System.Boolean
    description: True if the name of the texture that appears in the Texture PropertyManager is returned, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - getsystemtexturename
  - itexture
  - texture
  - name
  - file
  - string
  - res
  - boolean
---

# ITexture.GetSystemTextureName

Gets the name of the texture that appears in the Texture PropertyManager.

## Signature

```csharp
System.String GetSystemTextureName( 
   System.String
FileNameIn
,
   out System.Boolean
Res
)
```
## Parameters

- `FileNameIn` (System.String): Path and filename of texture (see Remarks )
- `Res` (System.Boolean): True if the name of the texture that appears in the Texture PropertyManager is returned, false if not

## Return Value

Name of texture as it appears in the Texture PropertyManager (see Remarks )

## Remarks

This method only supports SOLIDWORKS-supplied textures.
Call
ITexture::MaterialName
to get the value for FileNameIn before calling this method. ITexture::MaterialName
returns an abbreviated path and the name of the texture as it appears in the Texture PropertyManager. For example, if ITexture::MaterialName returns
install_dir
\data
\images\textures\plastic\brushed\bred.jpg
, then this method returns
Plastic\Brushed\Red
.

## Examples

- ITexture (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITexture)